import type { JSX } from 'solid-js'
import { For, Show, createEffect, createSignal } from 'solid-js'
import { render as renderComponent } from 'solid-js/web'
import { arrayify, filter, wrapFirstWord } from './util'

const name = 'use-bootstrap-select'
const classFlex = 'd-flex align-items-center gap-1'
const classTarget = `${name}-target`
const classWrapper = `${name}-wrapper`
const eventShow = `${name}:show`
const eventHide = `${name}:hide`
const eventToggle = `${name}:toggle`
const defaultConfig: Config = {
  position: 'down',
  maxHeight: '25rem',
  clearable: false,
  searchable: false,
  noResultsText: 'No results found',
  creatable: false,
  creatableText: 'Add <b>{value}</b>...',
  createPosition: 'first',
}

export default class UseBootstrapSelect {
  public selectElement: HTMLSelectElement
  private static instances: Map<HTMLSelectElement, UseBootstrapSelect> = new Map()
  private configObject?: OptionalType<Config>

  constructor(selectElement: HTMLSelectElement, config?: OptionalType<Config>) {
    this.selectElement = selectElement
    this.configObject = config
    this.init()
    UseBootstrapSelect.instances.set(selectElement, this)
  }

  private getConfigFromGlobal() {
    return (window as any).UseBootstrapSelectConfig as Config | undefined
  }

  private getConfigFromAttributes() {
    const data = {} as Config
    for (const [key, defaultValue] of Object.entries(defaultConfig)) {
      const attribute = this.selectElement.dataset[key]
      const boolean = typeof defaultValue === 'boolean'
      if (attribute) {
        (data as any)[key] = boolean ? attribute === 'true' : attribute
      }
    }
    return data
  }

  private getConfig() {
    const globalConfig = this.getConfigFromGlobal()
    const configObject = this.configObject
    const attrConfig = this.getConfigFromAttributes()
    return {
      ...defaultConfig,
      ...globalConfig,
      ...configObject,
      ...attrConfig,
    }
  }

  private setSelected(values: string[], selected: boolean, clear = true) {
    const items = new Set(values)
    const options = this.selectElement.options
    for (let i = 0; i < options.length; i++) {
      const option = options[i]
      if (selected && clear !== false) {
        option.selected = false
      }
      if (items.has(option.value)) {
        option.selected = selected
      }
    }
    this.update()
  }

  getValue(): string | string[] | null {
    if (this.selectElement.multiple) {
      const values = filter(this.getSelected()).map(i => i.value)
      return values.length === 0 ? null : values
    }
    else {
      const value = this.selectElement.value
      return value === '' ? null : value
    }
  }

  setValue(value: Value): void {
    const values = arrayify(value)
    if (!this.selectElement.multiple) {
      values.splice(1)
    }
    this.setSelected(values, true)
  }

  addValue(value: Value) {
    const values = arrayify(value)
    this.setSelected(values, true, false)
  }

  removeValue(value: Value) {
    const values = arrayify(value)
    this.setSelected(values, false)
  }

  clearValue() {
    this.setSelected(this.getSelected().map(i => i.value), false)
  }

  addOption(value: string, text?: string, selected = false, position: Config['createPosition'] = 'first') {
    const label = text ?? value
    const exist = Array.from(this.selectElement.options).some(i => i.value === value)
    if (!exist) {
      const option = document.createElement('option')
      option.value = value
      option.textContent = label
      option.selected = selected

      const options = this.selectElement.options
      if (options.length > 0) {
        if (position === 'last') {
          this.selectElement.append(option)
        }
        else {
          const firstOption = options[0]
          if (firstOption.value === '') {
            firstOption.insertAdjacentElement('afterend', option)
          }
          else {
            this.selectElement.prepend(option)
          }
        }
      }
      else {
        this.selectElement.append(option)
      }
      this.update()
    }
  }

  update() {
    this.selectElement.dispatchEvent(new Event('change'))
  }

  show() {
    this.selectElement.dispatchEvent(new Event(eventShow))
  }

  hide() {
    this.selectElement.dispatchEvent(new Event(eventHide))
  }

  toggle() {
    this.selectElement.dispatchEvent(new Event(eventToggle))
  }

  private init(): void {
    if (!UseBootstrapSelect.instances.has(this.selectElement)) {
      this.render()
      UseBootstrapSelect.instances.set(this.selectElement, this)
    }
  }

  private getClassList() {
    return this.selectElement.classList.value.replace(classTarget, '')
  }

  private getItems(): Items {
    return filter(Array.from(this.selectElement.options)).map(option => ({
      text: option.textContent as string,
      value: option.value,
      selected: option.selected,
      disabled: option.disabled,
      label: option.parentElement?.tagName === 'OPTGROUP' ? (option.parentElement as HTMLOptGroupElement).label : undefined,
    }))
  }

  private getSelected() {
    return Array.from(this.selectElement.selectedOptions).map(option => ({
      value: option.value,
      text: option.textContent as string,
    }))
  }

  private render() {
    this.selectElement.tabIndex = -1
    this.selectElement.classList.add(classTarget)

    const wrapper = document.createElement('div')
    wrapper.className = `${classWrapper} w-100`
    this.selectElement.insertAdjacentElement('afterend', wrapper)

    const Component = () => {
      const [config, setConfig] = createSignal(this.getConfig())
      const [classList, setClassList] = createSignal(this.getClassList())
      const [isMultiple, setIsMultiple] = createSignal(this.selectElement.multiple)
      const [isDisabled, setIsDisabled] = createSignal(this.selectElement.disabled)
      const [text, setText] = createSignal('')
      const [items, setItems] = createSignal(this.getItems())
      const [selected, setSelected] = createSignal(this.getSelected())
      const filteredItems = () => {
        items() // as dependency
        return this.getItems()
          .filter(i => i.text.toLowerCase().includes(text().toLowerCase()))
          .filter(i => isMultiple() ? !selected().map(o => o.value).includes(i.value) : true)
          .map((option) => {
            option.text = wrapFirstWord(text(), option.text)
            return option
          })
      }

      let dropdownMenu: HTMLDivElement
      let dropdownItemsWrapper: HTMLDivElement
      let inputElement: HTMLInputElement

      this.selectElement.addEventListener('change', () => {
        setConfig(this.getConfig())
        setClassList(this.getClassList())
        setIsMultiple(this.selectElement.multiple)
        setIsDisabled(this.selectElement.disabled)
        setItems(this.getItems())
        setSelected(this.getSelected())
      })
      this.selectElement.addEventListener('focus', () => {
        inputElement.focus()
      })

      const [focus, setFocus] = createSignal(false)
      const [shown, setShown] = createSignal(false)
      const hasPlaceholder = () => this.selectElement.options.length > 0 && this.selectElement.options[0].value === ''
      const placeholder = () => (hasPlaceholder() && filter(selected()).length < 1) ? this.selectElement.options[0].text : ''

      function toggle() {
        setShown(!shown())
      }
      function show() {
        setShown(true)
      }
      function hide() {
        setShown(false)
      }
      function clearActive() {
        dropdownItemsWrapper.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'))
      }
      function isIgnoredItem(element: Element) {
        return element.classList.contains('dropdown-header') || element.classList.contains('disabled')
      }
      function findNextItem(from: Element, direction: 'ArrowUp' | 'ArrowDown') {
        let nextItem = direction === 'ArrowUp' ? from.previousElementSibling : from.nextElementSibling
        while (nextItem && isIgnoredItem(nextItem)) {
          nextItem = direction === 'ArrowUp' ? nextItem.previousElementSibling : nextItem.nextElementSibling
        }
        return nextItem
      }
      function findNextDropdownItem(direction: 'ArrowUp' | 'ArrowDown') {
        const activeItem = dropdownItemsWrapper.querySelector('.dropdown-item.active')
        let nextItem
        if (activeItem) {
          nextItem = findNextItem(activeItem, direction)
        }
        else {
          const dropdownItems = dropdownItemsWrapper.querySelectorAll('.dropdown-item')
          const firstItem = direction === 'ArrowDown' ? dropdownItems[0] : dropdownItems[dropdownItems.length - 1]
          if (firstItem) {
            if (isIgnoredItem(firstItem)) {
              nextItem = findNextItem(firstItem, direction)
            }
            else {
              nextItem = firstItem
            }
          }
        }
        return nextItem
      }
      const create = () => {
        this.addOption(text(), text(), true, config().createPosition)
        setText('')
        if (!isMultiple()) {
          hide()
        }
      }
      this.selectElement.addEventListener(eventShow, () => {
        show()
        inputElement.focus()
      })
      this.selectElement.addEventListener(eventHide, hide)
      this.selectElement.addEventListener(eventToggle, () => {
        if (!shown()) {
          show()
          inputElement.focus()
        }
        else {
          hide()
        }
      })

      // Dropdown
      const Dropdown = ({ children }: WithChildren) => {
        return (
          <div class={`drop${config().position} ${name}`} onmousedown={e => e.preventDefault()}>
            {children}
          </div>
        )
      }

      // DropdownToggle
      const DropdownToggle = ({ children }: WithChildren) => {
        return (
          <div
            class={`${classFlex} ${classList()}`}
            classList={{
              focus: focus(),
              disabled: isDisabled(),
            }}
            onmousedown={(e) => {
              if (!isDisabled() && e.target.getAttribute('role') !== 'button') {
                toggle()
              }
              inputElement.focus()
            }}
          >
            {children}
          </div>
        )
      }

      // DropdownToggleContentWrapper
      const DropdownToggleContentWrapper = ({ children }: WithChildren) => {
        return (
          <div class={`${classFlex} flex-wrap flex-grow-1 w-100 overflow-hidden`}>
            {children}
          </div>
        )
      }

      // DropdownToggleContentSingle
      const DropdownToggleContentSingle = () => {
        return (
          <>
            {selected()[0]?.value === '' ? '' : selected()[0]?.text}
          </>
        )
      }

      // DropdownToggleContentMultiple
      const DropdownToggleContentMultiple = () => {
        return (
          <For each={filter(selected())}>{selected => (
            <div
              class="align-items-center gap-1 d-inline-flex py-0 border-0 btn text-bg-secondary"
              classList={{
                'disabled': isDisabled(),
                'btn-sm': classList().includes('form-select-sm'),
                'btn-lg': classList().includes('form-select-lg'),
              }}
            >
              {selected.text}
              <Show when={!isDisabled()}>
                <span
                  role="button"
                  class="d-inline-flex"
                  onclick={(e) => {
                    e.stopPropagation()
                    this.removeValue(selected.value)
                  }}
                >
                  <XIcon />
                </span>
              </Show>
            </div>
          )}
          </For>
        )
      }

      // InputWrapper
      const InputWrapper = () => {
        return (
          <div
            class="input-wrapper"
            classList={{
              'position-relative': (config().searchable && focus()) || filter(selected()).length < 1,
            }}
          >
            <span>{text() || 'i'}</span>
            <input
              ref={inputElement}
              type="text"
              value={text()}
              placeholder={placeholder()}
              readonly={!config().searchable && !isDisabled()}
              disabled={isDisabled()}
              onfocus={() => {
                setFocus(true)
                if (config().searchable) {
                  show()
                }
              }}
              onblur={() => {
                setFocus(false)
                hide()
              }}
              onkeydown={(e) => {
                switch (e.key) {
                  case 'Enter':
                    if (shown()) {
                      const activeItem = dropdownItemsWrapper.querySelector<HTMLDivElement>('.dropdown-item.active')
                      if (activeItem) {
                        const value = activeItem.dataset.value!
                        if (isMultiple()) {
                          this.addValue(value)
                        }
                        else {
                          this.setValue(value)
                          setText('')
                          hide()
                        }
                      }
                      else if (config().creatable) {
                        create()
                      }
                    }
                    else {
                      show()
                    }
                    e.preventDefault()
                    break
                  case ' ':
                    if (!config().searchable) {
                      show()
                      e.preventDefault()
                    }
                    break
                  case 'Escape':
                    hide()
                    break
                  case 'ArrowUp':
                  case 'ArrowDown':
                    !shown() && show()
                    e.preventDefault()
                    if (shown()) {
                      const targetItem = findNextDropdownItem(e.key)
                      if (targetItem) {
                        clearActive()
                        targetItem.classList.add('active')
                        targetItem.scrollIntoView({ block: 'nearest' })
                      }
                    }
                    break
                  case 'Backspace':
                    if (config().searchable && text() === '') {
                      if (isMultiple()) {
                        const selectedOption = selected()
                        if (selectedOption.length > 0) {
                          this.removeValue(selectedOption[selectedOption.length - 1].value)
                        }
                      }
                      else {
                        this.clearValue()
                      }
                    }
                    break
                }
              }}
              oninput={(e) => {
                setText(e.target.value.trim())
                if (!shown()) {
                  show()
                }
              }}
            />
          </div>
        )
      }

      // ClearButton
      const ClearButton = () => {
        return (
          <Show when={config().clearable}>
            <span
              role="button"
              class="ms-auto link-secondary d-inline-flex flex-shrink-0"
              classList={{ 'd-none': filter(selected()).length < 1 }}
              onclick={(e) => {
                e.stopPropagation()
                this.clearValue()
              }}
            >
              <XIcon />
            </span>
          </Show>
        )
      }

      // DropdownItemsWrapper
      const DropdownItemsWrapper = ({ children }: WithChildren) => {
        return (
          <div ref={dropdownItemsWrapper}>
            {children}
          </div>
        )
      }

      // DropdownItem
      const DropdownItem = ({ item }: { item: Items[0] }) => {
        return (
          <div
            class="dropdown-item"
            data-value={item.value}
            classList={{
              'optgroup-item': item.label !== undefined,
              'disabled': item.disabled,
              'active': item.selected,
              'selected': item.selected,
            }}
            onmouseover={(e) => {
              clearActive()
              e.target.classList.add('active')
            }}
            innerHTML={item.text}
            onclick={() => {
              if (isMultiple()) {
                this.addValue(item.value)
              }
              else {
                this.setValue(item.value)
                hide()
              }
            }}
          >
          </div>
        )
      }

      // DropdownMenu
      const DropdownMenu = () => {
        return (
          <div
            ref={dropdownMenu}
            data-bs-popper
            class="dropdown-menu w-100"
            classList={{ show: shown() }}
            style={{
              'max-height': config().maxHeight,
            }}
          >
            <DropdownItemsWrapper>
              <For each={filteredItems()}>{(item, i) => (
                <>
                  <Show when={item.label && (item.label !== filteredItems()[i() - 1]?.label || i() === 0)}>
                    <h6 class="dropdown-header">{item.label}</h6>
                  </Show>
                  <DropdownItem item={item} />
                </>
              )}
              </For>
            </DropdownItemsWrapper>
            <Show when={config().creatable && config().searchable && filteredItems().length < 1 && text() !== ''}>
              <div
                class="dropdown-item active"
                innerHTML={config().creatableText.replace('{value}', text())}
                onclick={create}
              >
              </div>
            </Show>
            <Show when={config().searchable && filteredItems().length < 1}>
              <div class="dropdown-item pe-none">{config().noResultsText}</div>
            </Show>
          </div>
        )
      }

      createEffect(() => {
        if (!shown()) {
          setText('')
          clearActive()
          dropdownItemsWrapper.querySelector('.dropdown-item.selected')?.classList.add('active')
        }
      })

      return (
        <Dropdown>
          <DropdownToggle>
            <DropdownToggleContentWrapper>
              <Show when={!isMultiple()}><DropdownToggleContentSingle /></Show>
              <Show when={isMultiple()}><DropdownToggleContentMultiple /></Show>
              <InputWrapper />
            </DropdownToggleContentWrapper>
            <ClearButton />
          </DropdownToggle>
          <DropdownMenu />
        </Dropdown>
      )
    }

    renderComponent(() => <Component />, wrapper)
  }

  static getOrCreateInstance(selectElement: HTMLSelectElement): UseBootstrapSelect {
    let instance = UseBootstrapSelect.instances.get(selectElement)
    if (!instance) {
      instance = new UseBootstrapSelect(selectElement)
    }
    return instance
  }
}

function XIcon() {
  return (
    <svg class="pe-none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

type Value = string | string[]
export interface Config {
  position: 'up' | 'down'
  maxHeight: string
  clearable: boolean
  searchable: boolean
  noResultsText: string
  creatable: boolean
  creatableText: string
  createPosition: 'first' | 'last'
}
interface WithChildren {
  children: JSX.Element
}
type Items = {
  text: string
  value: string
  selected: boolean
  disabled: boolean
  label?: string
}[]
export type OptionalType<T> = {
  [P in keyof T]?: T[P]
}
