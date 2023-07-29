declare const bootstrap: typeof import('bootstrap')

type ElementAttributes<T extends keyof HTMLElementTagNameMap> = {
  [K in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][K] | Partial<CSSStyleDeclaration>
}

class UseBootstrapSelect {
  private _target: HTMLSelectElement
  private _isSearch: boolean
  private _isCreate: boolean
  private _isClear: boolean
  private _maxHeight: string

  private _isMultiple: boolean
  private _isDisabled: boolean

  private _classDropdown = 'use-bootstrap-select'
  private _classDropdownToggle = 'd-flex align-items-center gap-1 text-start'
  private _classDropdownToggleContentWrapper = this._classDropdownToggle.replace('text-start', 'flex-wrap')
  private _classDropdownMenu = 'dropdown-menu w-100'
  private _classClearButton = 'ms-auto link-secondary d-inline-flex'
  private _classSearchInput = 'form-control shadow-none'
  private _classHidden = 'd-none'
  private _classTag = 'd-inline-flex align-items-center gap-1 px-2 text-bg-secondary'
  private _paddingDropdownItem = 'var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)'
  private _xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

  private _dropdown: HTMLDivElement
  private _dropdownToggle: HTMLButtonElement
  private _dropdownToggleContentWrapper: HTMLDivElement
  private _dropdownMenu: HTMLDivElement
  private _dropdownMenuContentWrapper: HTMLDivElement
  private _clearButton?: HTMLButtonElement
  private _searchInput?: HTMLInputElement
  private _searchNoResults?: HTMLDivElement
  private _tagBorderRadius: number = 0

  private _instance: bootstrap.Dropdown

  constructor(target: HTMLSelectElement) {
    this._target = target
    const { ubSelectClear, ubSelectSearch, ubSelectCreate, ubSelectMaxHeight } = target.dataset
    this._isClear = ubSelectClear !== undefined
    this._isSearch = ubSelectSearch !== undefined
    this._isCreate = ubSelectCreate !== undefined
    this._maxHeight = ubSelectMaxHeight || '25rem'
    this._isMultiple = target.multiple
    this._isDisabled = target.disabled

    // Remove 'DOM' if it already exists.
    const nextElement = target.nextElementSibling
    if (nextElement && nextElement.classList.contains(this._classDropdown)) {
      nextElement.remove()
    }

    // Dropdown.
    const dropdown = this._createElement('div', {
      className: `dropdown ${this._classDropdown}`,
    })

    // Dropdown toggle.
    const dropdownToggle = this._createElement('button', {
      type: 'button',
      disabled: this._isDisabled,
      className: `${this._classDropdownToggle} ${target.classList.value}`,
    })
    dropdownToggle.setAttribute('data-bs-toggle', 'dropdown')
    dropdownToggle.setAttribute('aria-expanded', 'false')

    // Dropdown toggle content wrapper.
    const dropdownToggleContentWrapper = this._createElement('div', {
      className: this._classDropdownToggleContentWrapper,
    })
    dropdownToggle.append(dropdownToggleContentWrapper)
    this._dropdownToggleContentWrapper = dropdownToggleContentWrapper

    // Dropdown menu.
    const dropdownMenu = this._createElement('div', {
      className: this._classDropdownMenu,
    })
    dropdownMenu.style.maxHeight = this._maxHeight

    // Dropdown menu content wrapper.
    const dropdownMenuContentWrapper = this._createElement('div')
    dropdownMenu.append(dropdownMenuContentWrapper)
    this._dropdownMenuContentWrapper = dropdownMenuContentWrapper

    // Clear button.
    if (this._isClear) {
      const clearButton = this._createElement('span', {
        className: `${this._classHidden} ${this._classClearButton}`,
        title: 'Clear selection',
        innerHTML: this._xIcon,
      }) as HTMLButtonElement
      dropdownToggle.append(clearButton)
      this._clearButton = clearButton
    }

    // Search input.
    if (this._isSearch) {
      const searchInput = this._createElement('input', {
        type: 'text',
        className: this._classSearchInput,
        placeholder: 'Search',
      })
      target.classList.contains('form-select-sm') && searchInput.classList.add('form-control-sm')
      target.classList.contains('form-select-lg') && searchInput.classList.add('form-control-lg')
      const div = this._createElement('div')
      div.style.padding = this._paddingDropdownItem
      div.append(searchInput)
      dropdownMenu.prepend(div)
      const searchNoResults = this._createElement('div', {
        textContent: 'No results found',
        className: this._classHidden,
      })
      searchNoResults.style.padding = this._paddingDropdownItem
      dropdownMenu.append(searchNoResults)
      this._searchInput = searchInput
      this._searchNoResults = searchNoResults
    }

    // Insert the dropdown after the target element.
    target.insertAdjacentElement('afterend', dropdown)
    target.classList.add(this._classHidden)

    dropdown.append(dropdownToggle)
    dropdownMenu.style.fontSize = `${this._getComputedSize(dropdownToggle, 'font-size')}rem`
    dropdown.append(dropdownMenu)
    this._dropdown = dropdown
    this._dropdownToggle = dropdownToggle
    this._dropdownMenu = dropdownMenu
    this._instance = bootstrap.Dropdown.getOrCreateInstance(dropdownToggle)

    // Tag border radius.
    const dropdownToggleBorderRadius = this._getComputedSize(dropdownToggle, 'border-radius')
    this._tagBorderRadius = dropdownToggleBorderRadius > 0.0625 ? dropdownToggleBorderRadius - 0.0625 : 0

    this._update()
    this._listen()
  }

  private _update() {
    this._dropdownToggleContentWrapper.innerHTML = ''
    this._dropdownMenuContentWrapper.innerHTML = ''
    this._getDropdownToggleContent().reverse().forEach(i => this._dropdownToggleContentWrapper.prepend(i))
    this._getDropdownMenuContent().forEach(i => this._dropdownMenuContentWrapper.append(i))
    if (this._isClear && this._clearButton) {
      this._shouldClearButtonHidden() ? this._clearButton.classList.add(this._classHidden) : this._clearButton.classList.remove(this._classHidden)
    }
    if (this._searchInput) {
      this._searchInput.value = ''
    }
    this._toggleValidityClass()
  }

  private _listen() {
    // When the dropdown is shown.
    this._dropdownToggle.addEventListener('shown.bs.dropdown', () => {
      if (this._searchInput) {
        this._searchInput.focus()
      }
      else {
        const active = this._dropdownMenuContentWrapper.querySelector('.active') as HTMLButtonElement | null
        active && active.focus()
      }
    })

    // On click clear button.
    if (this._clearButton) {
      this._clearButton.addEventListener('click', (e) => {
        e.stopPropagation()
        this._instance.toggle()
        Array.from(this._target.options).forEach(i => i.selected = false)
        this._hasPlaceholder() && (this._target.value = '')
        this._triggerChange()
      })
    }

    // On keyup search input.
    const input = this._searchInput
    if (input) {
      input.addEventListener('keyup', (e) => {
        const value = input.value.trim()
        let found = 0
        this._dropdownMenuContentWrapper.querySelectorAll('button').forEach((button) => {
          button.classList.add(this._classHidden)
          if (button.innerHTML.toLowerCase().includes(value.toLowerCase())) {
            button.classList.remove(this._classHidden)
            found++
          }
        })
        if (this._searchNoResults) {
          if (found > 0) {
            this._searchNoResults.classList.add(this._classHidden)
          }
          else {
            this._searchNoResults.classList.remove(this._classHidden)
            if (this._isCreate) {
              this._searchNoResults.innerHTML = `Press Enter to add "<b>${value}</b>"`
              if (e.key === 'Enter') {
                const newOption = this._createElement('option', {
                  value,
                  selected: true,
                  textContent: value,
                })
                this._target.add(newOption, this._target.firstChild as HTMLElement)
                this._instance.toggle()
                this._triggerChange()
                this._dropdownToggle.focus()
                this._searchNoResults.classList.add(this._classHidden)
              }
            }
          }
        }
      })
    }

    // Validation.
    const form = this._target.form
    if (form) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            this._toggleValidityClass()
          }
        })
      })
      observer.observe(form, {
        attributes: true,
        attributeFilter: ['class'],
      })
    }

    this._target.addEventListener('change', () => this._update())
  }

  private _createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, config?: ElementAttributes<T>) {
    const element = document.createElement(tagName)
    if (config) {
      for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
          const value = config[key]
          if (key === 'style' && typeof value === 'object') {
            Object.assign(element.style, value)
          }
          else {
            (element as any)[key] = value
          }
        }
      }
    }
    return element
  }

  private _getDropdownToggleContent() {
    const selected = Array.from(this._target.selectedOptions)
    selected.length < 1 && this._isMultiple && this._hasPlaceholder() && selected.push(this._target.options[0])
    return selected.map(option => option.value === '' ? this._createPlaceholder(option) : this._isMultiple ? this._createTag(option) : option.innerHTML)
  }

  private _getDropdownMenuContent() {
    const items: (HTMLButtonElement | HTMLHeadingElement)[] = []
    this._target.querySelectorAll(':scope>*').forEach((option) => {
      if (option instanceof HTMLOptionElement) {
        option.value !== '' && items.push(this._createDropdownItem(option))
      }
      if (option instanceof HTMLOptGroupElement) {
        const header = this._createElement('h6', {
          className: 'dropdown-header',
          innerHTML: option.label,
        })
        items.push(header)
        option.querySelectorAll('option').forEach(opt => items.push(this._createDropdownItem(opt, true)))
      }
    })
    return items
  }

  private _hasPlaceholder() {
    return this._target.options.length > 0 && this._target.options[0].value === ''
  }

  private _createPlaceholder(option: HTMLOptionElement) {
    const span = this._createElement('span', {
      innerHTML: option.innerHTML,
    })
    span.style.color = 'var(--bs-secondary-color)'
    return span
  }

  private _createTag(option: HTMLOptionElement) {
    const outerSpan = this._createElement('span', {
      className: `${this._classTag}${this._isDisabled ? ' bg-opacity-50' : ''}`,
      textContent: option.innerHTML,
    })
    if (this._tagBorderRadius > 0) {
      outerSpan.style.borderRadius = `${this._tagBorderRadius}rem`
    }
    const innerSpan = this._createElement('span', {
      className: 'd-inline-flex',
      innerHTML: this._xIcon,
    })
    if (!this._isDisabled) {
      innerSpan.onclick = () => {
        this._instance.toggle()
        this.removeValue(option.value)
      }
    }
    outerSpan.prepend(innerSpan)
    return outerSpan
  }

  private _createDropdownItem(option: HTMLOptionElement, insideOptGroup = false) {
    const button = this._createElement('button', {
      type: 'button',
      disabled: (option.selected && this._isMultiple) || option.disabled,
      innerHTML: option.innerHTML,
      className: `dropdown-item${option.selected ? ' active' : ''}`,
    })
    if (insideOptGroup) {
      button.style.paddingLeft = 'calc(var(--bs-dropdown-item-padding-x) * 2)'
    }
    button.addEventListener('click', () => {
      this.setValue(option.value)
      this._dropdownToggle.focus()
    })
    return button
  }

  private _setSelectedOption(value: string, selected: boolean) {
    Array.from(this._target.options).forEach(i => (i.value === value) && (i.selected = selected))
  }

  private _triggerChange() {
    this._target.dispatchEvent(new Event('change'))
  }

  private _shouldClearButtonHidden() {
    const getValue = this.getValue()
    const value = (Array.isArray(getValue) ? getValue : [getValue]).filter(v => v !== '')
    return value.length < 1
  }

  private _getComputedSize(element: HTMLElement, property: string) {
    return Number.parseFloat(window.getComputedStyle(element).getPropertyValue(property)) / 16 // 1rem = 16px
  }

  private _toggleValidityClass() {
    const form = this._target.form
    if (form) {
      this._dropdownToggle.classList.remove('is-valid', 'is-invalid')
      form.classList.contains('was-validated') && this._dropdownToggle.classList.add(this._target.validity.valid ? 'is-valid' : 'is-invalid')
    }
  }

  setValue(value: string) {
    this._setSelectedOption(value, true)
    value !== '' && this._setSelectedOption('', false)
    this._triggerChange()
  }

  getValue() {
    return this._isMultiple ? Array.from(this._target.selectedOptions).map(i => i.value) : this._target.value
  }

  removeValue(value: string) {
    this._setSelectedOption(value, false)
    this._triggerChange()
  }
}

export { UseBootstrapSelect }
