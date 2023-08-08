import codeBasic from '../code/basic.html.txt'
import codePlaceholder from '../code/placeholder.html.txt'
import codeOptgroup from '../code/optgroup.html.txt'
import codeMultiple from '../code/multiple.html.txt'
import codeClearable from '../code/clearable.html.txt'
import codeSearch from '../code/search.html.txt'
import codeCreatable from '../code/creatable.html.txt'
import codeDisabled from '../code/disabled.html.txt'
import codeDisabledOptions from '../code/disabled-options.html.txt'
import codeSizing from '../code/sizing.html.txt'
import codeValidation from '../code/validation.html.txt'
import codeMethods from '../code/methods.html.txt'

export function Example() {
  return (
    <>
      <h2 className="fw-bold mb-4">Example</h2>
      <div className="row g-5" id="masonry-row">
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="basic-preview-tab" data-bs-toggle="tab" data-bs-target="#basic-preview-tab-pane" type="button" role="tab" aria-controls="basic-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="basic-code-tab" data-bs-toggle="tab" data-bs-target="#basic-code-tab-pane" type="button" role="tab" aria-controls="basic-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Basic</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="basic-preview-tab-pane" role="tabpanel" aria-labelledby="basic-preview-tab" tabIndex={0}>
                  <select className="form-select">
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera">Opera</option>
                    <option value="safari">Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="basic-code-tab-pane" role="tabpanel" aria-labelledby="basic-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeBasic}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="placeholder-preview-tab" data-bs-toggle="tab" data-bs-target="#placeholder-preview-tab-pane" type="button" role="tab" aria-controls="placeholder-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="placeholder-code-tab" data-bs-toggle="tab" data-bs-target="#placeholder-code-tab-pane" type="button" role="tab" aria-controls="placeholder-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Placeholder</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="placeholder-preview-tab-pane" role="tabpanel" aria-labelledby="placeholder-preview-tab" tabIndex={0}>
                  <select className="form-select">
                    <option value="">Choose browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera">Opera</option>
                    <option value="safari">Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="placeholder-code-tab-pane" role="tabpanel" aria-labelledby="placeholder-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codePlaceholder}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="optgroup-preview-tab" data-bs-toggle="tab" data-bs-target="#optgroup-preview-tab-pane" type="button" role="tab" aria-controls="optgroup-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="optgroup-code-tab" data-bs-toggle="tab" data-bs-target="#optgroup-code-tab-pane" type="button" role="tab" aria-controls="optgroup-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Optgroup</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="optgroup-preview-tab-pane" role="tabpanel" aria-labelledby="optgroup-preview-tab" tabIndex={0}>
                  <select className="form-select">
                    <optgroup label="Theropods">
                      <option>Tyrannosaurus</option>
                      <option>Velociraptor</option>
                      <option>Deinonychus</option>
                    </optgroup>
                    <optgroup label="Sauropods">
                      <option>Diplodocus</option>
                      <option>Saltasaurus</option>
                      <option>Apatosaurus</option>
                    </optgroup>
                  </select>
                </div>
                <div className="tab-pane" id="optgroup-code-tab-pane" role="tabpanel" aria-labelledby="optgroup-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeOptgroup}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="multiple-preview-tab" data-bs-toggle="tab" data-bs-target="#multiple-preview-tab-pane" type="button" role="tab" aria-controls="multiple-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="multiple-code-tab" data-bs-toggle="tab" data-bs-target="#multiple-code-tab-pane" type="button" role="tab" aria-controls="multiple-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Multiple</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="multiple-preview-tab-pane" role="tabpanel" aria-labelledby="multiple-preview-tab" tabIndex={0}>
                  <select className="form-select" multiple defaultValue={['chrome', 'firefox']}>
                    <option value="">Choose browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera">Opera</option>
                    <option value="safari">Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="multiple-code-tab-pane" role="tabpanel" aria-labelledby="multiple-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeMultiple}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="clearable-preview-tab" data-bs-toggle="tab" data-bs-target="#clearable-preview-tab-pane" type="button" role="tab" aria-controls="clearable-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="clearable-code-tab" data-bs-toggle="tab" data-bs-target="#clearable-code-tab-pane" type="button" role="tab" aria-controls="clearable-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Clearable</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="clearable-preview-tab-pane" role="tabpanel" aria-labelledby="clearable-preview-tab" tabIndex={0}>
                  <select className="form-select" data-ub-select-clear defaultValue="chrome">
                    <option value="">Choose browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera">Opera</option>
                    <option value="safari">Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="clearable-code-tab-pane" role="tabpanel" aria-labelledby="clearable-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeClearable}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="search-preview-tab" data-bs-toggle="tab" data-bs-target="#search-preview-tab-pane" type="button" role="tab" aria-controls="search-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="search-code-tab" data-bs-toggle="tab" data-bs-target="#search-code-tab-pane" type="button" role="tab" aria-controls="search-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Search</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="search-preview-tab-pane" role="tabpanel" aria-labelledby="search-preview-tab" tabIndex={0}>
                  <select className="form-select" data-ub-select-search>
                    <option value="">Choose browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera">Opera</option>
                    <option value="safari">Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="search-code-tab-pane" role="tabpanel" aria-labelledby="search-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeSearch}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="creatable-preview-tab" data-bs-toggle="tab" data-bs-target="#creatable-preview-tab-pane" type="button" role="tab" aria-controls="creatable-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="creatable-code-tab" data-bs-toggle="tab" data-bs-target="#creatable-code-tab-pane" type="button" role="tab" aria-controls="creatable-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Creatable</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="creatable-preview-tab-pane" role="tabpanel" aria-labelledby="creatable-preview-tab" tabIndex={0}>
                  <select className="form-select" data-ub-select-search data-ub-select-create>
                    <option value="">Choose browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera">Opera</option>
                    <option value="safari">Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="creatable-code-tab-pane" role="tabpanel" aria-labelledby="creatable-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeCreatable}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="disabled-preview-tab" data-bs-toggle="tab" data-bs-target="#disabled-preview-tab-pane" type="button" role="tab" aria-controls="disabled-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="disabled-code-tab" data-bs-toggle="tab" data-bs-target="#disabled-code-tab-pane" type="button" role="tab" aria-controls="disabled-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Disabled</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="disabled-preview-tab-pane" role="tabpanel" aria-labelledby="disabled-preview-tab" tabIndex={0}>
                  <div className="vstack gap-2">
                    <select className="form-select" disabled>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <select className="form-select" multiple disabled defaultValue={['chrome', 'firefox']}>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                  </div>
                </div>
                <div className="tab-pane" id="disabled-code-tab-pane" role="tabpanel" aria-labelledby="disabled-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeDisabled}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="disabled-options-preview-tab" data-bs-toggle="tab" data-bs-target="#disabled-options-preview-tab-pane" type="button" role="tab" aria-controls="disabled-options-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="disabled-options-code-tab" data-bs-toggle="tab" data-bs-target="#disabled-options-code-tab-pane" type="button" role="tab" aria-controls="disabled-options-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Disabled options</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="disabled-options-preview-tab-pane" role="tabpanel" aria-labelledby="disabled-options-preview-tab" tabIndex={0}>
                  <select className="form-select">
                    <option value="">Choose browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="edge">Edge</option>
                    <option value="firefox">Firefox</option>
                    <option value="opera" disabled>Opera</option>
                    <option value="safari" disabled>Safari</option>
                  </select>
                </div>
                <div className="tab-pane" id="disabled-options-code-tab-pane" role="tabpanel" aria-labelledby="disabled-options-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeDisabledOptions}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="sizing-options-preview-tab" data-bs-toggle="tab" data-bs-target="#sizing-options-preview-tab-pane" type="button" role="tab" aria-controls="sizing-options-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="sizing-options-code-tab" data-bs-toggle="tab" data-bs-target="#sizing-options-code-tab-pane" type="button" role="tab" aria-controls="sizing-options-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Sizing</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="sizing-options-preview-tab-pane" role="tabpanel" aria-labelledby="sizing-options-preview-tab" tabIndex={0}>
                  <div className="vstack gap-2">
                    <select className="form-select form-select-sm" data-ub-select-search data-ub-select-clear>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <select multiple className="form-select form-select-sm" data-ub-select-search data-ub-select-clear defaultValue={['chrome', 'firefox']}>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <select className="form-select" data-ub-select-search data-ub-select-clear>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <select multiple className="form-select" data-ub-select-search data-ub-select-clear defaultValue={['chrome', 'firefox']}>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <select className="form-select form-select-lg" data-ub-select-search data-ub-select-clear>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <select multiple className="form-select form-select-lg" data-ub-select-search data-ub-select-clear defaultValue={['chrome', 'firefox']}>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                  </div>
                </div>
                <div className="tab-pane" id="sizing-options-code-tab-pane" role="tabpanel" aria-labelledby="sizing-options-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeSizing}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="validation-preview-tab" data-bs-toggle="tab" data-bs-target="#validation-preview-tab-pane" type="button" role="tab" aria-controls="validation-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="validation-code-tab" data-bs-toggle="tab" data-bs-target="#validation-code-tab-pane" type="button" role="tab" aria-controls="validation-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Validation</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="validation-preview-tab-pane" role="tabpanel" aria-labelledby="validation-preview-tab" tabIndex={0}>
                  <form className="needs-validation vstack gap-3" noValidate>
                    <div>
                      <select className="form-select" data-ub-select-clear required>
                        <option value="">Choose browser</option>
                        <option value="chrome">Chrome</option>
                        <option value="edge">Edge</option>
                        <option value="firefox">Firefox</option>
                        <option value="opera">Opera</option>
                        <option value="safari">Safari</option>
                      </select>
                      <div className="invalid-feedback">This field is required.</div>
                      <div className="valid-feedback">Good choice.</div>
                    </div>
                    <div>
                      <select className="form-select" multiple required>
                        <option value="">Choose browser</option>
                        <option value="chrome">Chrome</option>
                        <option value="edge">Edge</option>
                        <option value="firefox">Firefox</option>
                        <option value="opera">Opera</option>
                        <option value="safari">Safari</option>
                      </select>
                      <div className="invalid-feedback">This field is required.</div>
                      <div className="valid-feedback">Good choice.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
                <div className="tab-pane" id="validation-code-tab-pane" role="tabpanel" aria-labelledby="validation-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeValidation}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="methods-preview-tab" data-bs-toggle="tab" data-bs-target="#methods-preview-tab-pane" type="button" role="tab" aria-controls="methods-preview-tab-pane" aria-selected="true">Preview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="methods-code-tab" data-bs-toggle="tab" data-bs-target="#methods-code-tab-pane" type="button" role="tab" aria-controls="methods-code-tab-pane" aria-selected="false">Code</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Methods</h5>
              <div className="tab-content">
                <div className="tab-pane show active" id="methods-preview-tab-pane" role="tabpanel" aria-labelledby="methods-preview-tab" tabIndex={0}>
                  <div className="vstack gap-3">
                    <select className="form-select" id="example1">
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <div className="hstack gap-3 flex-wrap">
                      <button className="btn btn-sm btn-secondary" type="button" id="setValue1"><code className="text-white">setValue('firefox')</code></button>
                      <button className="btn btn-sm btn-secondary" type="button" id="getValue1"><code className="text-white">getValue()</code></button>
                    </div>
                    <hr />
                    <select className="form-select" id="example2" multiple defaultValue={['chrome', 'firefox']}>
                      <option value="">Choose browser</option>
                      <option value="chrome">Chrome</option>
                      <option value="edge">Edge</option>
                      <option value="firefox">Firefox</option>
                      <option value="opera">Opera</option>
                      <option value="safari">Safari</option>
                    </select>
                    <div className="hstack gap-3 flex-wrap">
                      <button className="btn btn-sm btn-secondary" type="button" id="removeValue"><code className="text-white">removeValue('firefox')</code></button>
                      <button className="btn btn-sm btn-secondary" type="button" id="getValue2"><code className="text-white">getValue()</code></button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="methods-code-tab-pane" role="tabpanel" aria-labelledby="methods-code-tab" tabIndex={0}>
                  <pre><code className="language-html">{codeMethods}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
