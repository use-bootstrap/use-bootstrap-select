/* eslint-disable no-alert */
import type { Accessor, JSX, Setter } from 'solid-js'
import { For, Show, createEffect, createSignal, on, onMount } from 'solid-js'
import prism from 'prismjs'
import 'bootstrap/js/dist/dropdown'
import { format } from 'prettier'
import htmlParser from 'prettier/plugins/html'
import pkg from '../../../package.json'
import UseBootstrapSelect from '../../lib/use-bootstrap-select.tsx'

const codeDemo = `<script>
  const example = new ${pkg.libName}(document.getElementById('example'))
</script>`

export default function Demo() {
  return (
    <div>
      <h2 class="fw-bold mb-4">Demo</h2>
      <LiveDemo />
    </div>
  )
}

function LiveDemo() {
  const [position, setPosition] = createSignal<'down' | 'up'>('down')
  const [maxHeight, setMaxHeight] = createSignal('25rem')
  const [size, setSize] = createSignal<'' | 'sm' | 'lg'>('')
  const [optgroup, setOptgroup] = createSignal(false)
  const [multiple, setMultiple] = createSignal(false)
  const [disabled, setDisabled] = createSignal(false)
  const [placeholder, setPlaceholder] = createSignal(false)
  const [clearable, setClearable] = createSignal(false)
  const [searchable, setSearchable] = createSignal(false)
  const [noResultsText, setNoResultsText] = createSignal('No results found')
  const [creatable, setCreatable] = createSignal(false)
  const [creatableText, setCreatableText] = createSignal('Add <b>{value}</b>...')
  const [createPosition, setCreatePosition] = createSignal<'first' | 'last'>('first')
  const [validated, setValidated] = createSignal(false)
  const [validationState, setValidationState] = createSignal<'is-valid' | 'is-invalid'>('is-valid')

  const fruit = () => ([
    {
      text: 'Apple',
      value: 'apple',
    },
    {
      text: 'Banana',
      value: 'banana',
    },
    {
      text: 'Grape',
      value: 'grape',
    },
    {
      text: 'Kiwi',
      value: 'kiwi',
    },
    {
      text: 'Orange',
      value: 'orange',
    },
    {
      text: 'Snake fruit',
      value: 'snake_fruit',
      disabled: true,
    },
  ])
  const vegetable = () => ([
    {
      text: 'Broccoli',
      value: 'broccoli',
    },
    {
      text: 'Carrot',
      value: 'carrot',
    },
    {
      text: 'Cucumber',
      value: 'cucumber',
    },
    {
      text: 'Eggplant',
      value: 'eggplant',
      disabled: true,
    },
    {
      text: 'Spinach',
      value: 'spinach',
    },
    {
      text: 'Tomato',
      value: 'tomato',
    },
  ])

  let example: UseBootstrapSelect
  let target: HTMLSelectElement | undefined
  let code: HTMLElement | undefined

  function escapeHtml(text: string) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;',
    }

    return text.replace(/[&<>"']/g, (m: string | number) => {
      return (map as any)[m]
    })
  }

  function replaceAll(searchValues: string[], replaceValue: string, inputString: string) {
    let outputString = inputString
    for (let i = 0; i < searchValues.length; i++) {
      outputString = outputString.replace(searchValues[i], replaceValue)
    }
    return outputString
  }

  async function generateCode() {
    if (target) {
      let outerHTML = target.outerHTML
      outerHTML = replaceAll([
        ' tabindex="-1"',
        ' use-bootstrap-select-target',
        ' data-position="down"',
        ' data-max-height="25rem"',
        ' data-no-results-text="No results found"',
        ' data-creatable-text="Add <b>{value}</b>..."',
        ' data-create-position="first"',
        ' data-clearable="false"',
        ' data-searchable="false"',
        ' data-creatable="false"',
      ], '', outerHTML)
      outerHTML = outerHTML.replace('multiple=""', 'multiple')
      outerHTML = outerHTML.replaceAll('disabled=""', 'disabled')
      outerHTML = outerHTML + codeDemo.replace('<', '\n\n<')
      outerHTML = await format(outerHTML, { parser: 'html', plugins: [htmlParser] })
      outerHTML = escapeHtml(outerHTML)
      if (code) {
        code.innerHTML = outerHTML
      }
      prism.highlightAll()
    }
  }

  onMount(() => {
    const target = document.getElementById('example') as HTMLSelectElement
    example = new UseBootstrapSelect(target)
  })

  createEffect(() => {
    if (placeholder()) {
      example.selectElement.insertAdjacentHTML('afterbegin', '<option value="">--- Choose ---</option>')
    }
    else {
      if (example.selectElement.options[0].value === '') {
        example.selectElement.options[0].remove()
      }
    }
  })
  createEffect(() => {
    if (clearable()) {
      setPlaceholder(true)
    }
  })
  createEffect(() => {
    if (!placeholder()) {
      setClearable(false)
    }
  })
  createEffect(() => {
    if (creatable()) {
      setSearchable(true)
    }
  })
  createEffect(() => {
    if (!searchable()) {
      setCreatable(false)
    }
  })

  createEffect(on([size, position, maxHeight, optgroup, multiple, disabled, placeholder, clearable, searchable, noResultsText, creatable, creatableText, createPosition, validated, validationState], () => {
    setTimeout(() => {
      generateCode()
    }, 150)
  }))

  createEffect(on([size, position, maxHeight, optgroup, multiple, disabled, placeholder, clearable, searchable, noResultsText, creatable, creatableText, createPosition, validated, validationState], (next, prev) => {
    setTimeout(() => {
      if (target) {
        const prevPlaceholder = !prev ? false : prev[6]
        if (next[6] && !prevPlaceholder) {
          for (let i = 0; i < target.options.length; i++) {
            const option = target.options[i]
            option.selected = option.value === ''
          }
        }
        example.update()
      }
    }, 150)
  }, { defer: true }))

  return (
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-4">
          <div class="col-12 col-lg-8 col-xl-9">
            <div style="max-width: 25rem" class="mx-auto">
              <label for="example" class="form-label fw-bold">Example label</label>
              <select
                id="example"
                ref={target}
                class="form-select"
                multiple={multiple()}
                disabled={disabled()}
                data-position={position()}
                data-max-height={maxHeight()}
                data-clearable={clearable()}
                data-searchable={searchable()}
                data-no-results-text={searchable() ? noResultsText() : 'No results found'}
                data-creatable={creatable()}
                data-creatable-text={creatable() ? creatableText() : 'Add <b>{value}</b>...'}
                data-create-position={creatable() ? createPosition() : 'first'}
                classList={{
                  'form-select-sm': size() === 'sm',
                  'form-select-lg': size() === 'lg',
                  'is-valid': validated() && validationState() === 'is-valid',
                  'is-invalid': validated() && validationState() === 'is-invalid',
                }}
              >
                <Show
                  fallback={(
                    <For each={fruit()}>{row => (
                      <option value={row.value} disabled={row.disabled === true}>{row.text}</option>
                    )}
                    </For>
                  )}
                  when={optgroup()}
                >
                  <optgroup label="Fruit">
                    <For each={fruit()}>{row => (
                      <option value={row.value} disabled={row.disabled === true}>{row.text}</option>
                    )}
                    </For>
                  </optgroup>
                </Show>
                <Show
                  fallback={(
                    <For each={vegetable()}>{row => (
                      <option value={row.value} disabled={row.disabled === true}>{row.text}</option>
                    )}
                    </For>
                  )}
                  when={optgroup()}
                >
                  <optgroup label="Vegetable">
                    <For each={vegetable()}>{row => (
                      <option value={row.value} disabled={row.disabled === true}>{row.text}</option>
                    )}
                    </For>
                  </optgroup>
                </Show>
              </select>
            </div>
            <div class="mt-3">
              <pre><code class="language-html" ref={code}></code></pre>
            </div>
            <div class="mt-3">
              <h5>Methods:</h5>
              <div class="d-flex flex-wrap gap-3">
                <ButtonMethod onclick={() => example.show()}>example.show()</ButtonMethod>
                <ButtonMethod onclick={() => alert(JSON.stringify(example.getValue()))}>example.getValue()</ButtonMethod>
                <Show when={multiple()} fallback={<ButtonMethod onclick={() => example.setValue('banana')}>example.setValue('banana')</ButtonMethod>}>
                  <ButtonMethod onclick={() => example.setValue(['banana', 'grape'])}>example.setValue(['banana', 'grape'])</ButtonMethod>
                  <ButtonMethod onclick={() => example.addValue('orange')}>example.addValue('orange')</ButtonMethod>
                  <ButtonMethod onclick={() => example.removeValue('orange')}>example.removeValue('orange')</ButtonMethod>
                </Show>
                <ButtonMethod onclick={() => {
                  example.addOption('pineapple', 'Pineapple')
                  setTimeout(() => {
                    generateCode()
                  }, 150)
                }}
                >
                  example.addOption('pineapple', 'Pineapple')
                </ButtonMethod>
                <ButtonMethod onclick={() => example.clearValue()}>example.clearValue()</ButtonMethod>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-xl-3">
            <div class="vstack gap-2">
              <div>
                <label class="form-label mb-0 fw-medium d-block">Size</label>
                <div class="form-check form-check-inline">
                  <input checked={size() === ''} oninput={e => setSize(e.target.value as any)} class="form-check-input" type="radio" name="size" id="sizeDefault" value="" />
                  <label class="form-check-label" for="sizeDefault">Default</label>
                </div>
                <div class="form-check form-check-inline">
                  <input checked={size() === 'sm'} oninput={e => setSize(e.target.value as any)} class="form-check-input" type="radio" name="size" id="sizeSm" value="sm" />
                  <label class="form-check-label" for="sizeSm">Sm</label>
                </div>
                <div class="form-check form-check-inline">
                  <input checked={size() === 'lg'} oninput={e => setSize(e.target.value as any)} class="form-check-input" type="radio" name="size" id="sizeLg" value="lg" />
                  <label class="form-check-label" for="sizeLg">Lg</label>
                </div>
              </div>
              <div>
                <label class="form-label mb-0 fw-medium d-block">Dropdown menu position</label>
                <div class="form-check form-check-inline">
                  <input checked={position() === 'down'} oninput={e => setPosition(e.target.value as any)} class="form-check-input" type="radio" name="position" id="positionDown" value="down" />
                  <label class="form-check-label" for="positionDown">Down</label>
                </div>
                <div class="form-check form-check-inline">
                  <input checked={position() === 'up'} oninput={e => setPosition(e.target.value as any)} class="form-check-input" type="radio" name="position" id="positionUp" value="up" />
                  <label class="form-check-label" for="positionUp">Up</label>
                </div>
              </div>
              <div>
                <label for="maxHeight" class="form-label mb-0 fw-medium">maxHeight</label>
                <input value={maxHeight()} oninput={e => setMaxHeight(e.target.value.trim())} type="text" class="form-control form-control-sm" id="maxHeight" autocomplete="off" />
              </div>
              <Switcher label="Optgroup" checked={optgroup} setter={setOptgroup} />
              <Switcher label="Multiple" checked={multiple} setter={setMultiple} />
              <Switcher label="Disabled" checked={disabled} setter={setDisabled} />
              <Switcher label="Placeholder" checked={placeholder} setter={setPlaceholder} />
              <Switcher label="Clearable" checked={clearable} setter={setClearable} />
              <Switcher label="Searchable" checked={searchable} setter={setSearchable} />
              <Show when={searchable()}>
                <div>
                  <label for="noResultsText" class="form-label mb-0 fw-medium">noResultsText</label>
                  <input value={noResultsText()} oninput={e => setNoResultsText(e.target.value.trim())} type="text" class="form-control form-control-sm" id="noResultsText" autocomplete="off" />
                </div>
              </Show>
              <Switcher label="Creatable" checked={creatable} setter={setCreatable} />
              <Show when={creatable()}>
                <div>
                  <label for="creatableText" class="form-label mb-0 fw-medium">creatableText</label>
                  <input value={creatableText()} oninput={e => setCreatableText(e.target.value.trim())} type="text" class="form-control form-control-sm" id="creatableText" autocomplete="off" />
                </div>
                <div>
                  <label class="form-label mb-0 fw-medium d-block">createPosition</label>
                  <div class="form-check form-check-inline">
                    <input checked={createPosition() === 'first'} oninput={e => setCreatePosition(e.target.value as any)} class="form-check-input" type="radio" name="createPosition" id="createPositionFirst" value="first" />
                    <label class="form-check-label" for="createPositionFirst">First</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input checked={createPosition() === 'last'} oninput={e => setCreatePosition(e.target.value as any)} class="form-check-input" type="radio" name="createPosition" id="createPositionLast" value="last" />
                    <label class="form-check-label" for="createPositionLast">Last</label>
                  </div>
                </div>
              </Show>
              <Switcher label="Validated" checked={validated} setter={setValidated} />
              <Show when={validated()}>
                <div>
                  <div class="form-check form-check-inline">
                    <input checked={validationState() === 'is-valid'} oninput={e => setValidationState(e.target.value as any)} class="form-check-input" type="radio" name="validationState" id="validationStateValid" value="is-valid" />
                    <label class="form-check-label" for="validationStateValid">Valid</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input checked={validationState() === 'is-invalid'} oninput={e => setValidationState(e.target.value as any)} class="form-check-input" type="radio" name="validationState" id="validationStateInvalid" value="is-invalid" />
                    <label class="form-check-label" for="validationStateInvalid">Invalid</label>
                  </div>
                </div>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Switcher({ checked, label, setter }: SwitcherProps) {
  const id = () => label.replace(/[^a-zA-Z0-9]/g, '')
  return (
    <div class="form-check form-switch mb-0">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id={`check${id()}`}
        checked={checked()}
        onchange={() => setter(value => !value)}
      />
      <label class="form-check-label" for={`check${id()}`}>{label}</label>
    </div>
  )
}

function ButtonMethod({ children, onclick }: { children: JSX.Element, onclick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> }) {
  return (
    <button
      class="btn btn-sm btn-light"
      type="button"
      onclick={onclick}
    >
      <code class="text-success">{children}</code>
    </button>
  )
}

interface SwitcherProps {
  checked: Accessor<boolean>
  setter: Setter<boolean>
  label: string
}
