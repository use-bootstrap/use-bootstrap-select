import { For } from 'solid-js'
import pkg from '../../../package.json'

export default function Configuration() {
  const configuration: ConfigurationProps[] = [
    {
      name: 'position',
      type: 'string',
      default: `'up'`,
      description: `Specifies the position of the dropdown menu in relation to the select box.<br />
      Possible values are <code>'up'</code> or <code>'down'</code>.`,
    },
    {
      name: 'maxHeight',
      type: 'string',
      default: `'25rem'`,
      description: `Sets the maximum height of the dropdown menu. It can be specified in length units (e.g., <code>'300px'</code>, <code>'10rem'</code>).`,
    },
    {
      name: 'clearable',
      type: 'boolean',
      default: 'false',
      description: `Determines whether the select box allows clearing the selected option. Set to <code>true</code> to enable the clearable feature.`,
    },
    {
      name: 'searchable',
      type: 'boolean',
      default: 'false',
      description: `Indicates whether the select box includes a search input for filtering options. Set to <code>true</code> to enable the search functionality.`,
    },
    {
      name: 'noResultsText',
      type: 'string',
      default: `'No results found'`,
      description: `Defines the text message to display when no matching results are found during search.`,
    },
    {
      name: 'creatable',
      type: 'boolean',
      default: 'false',
      description: `Enables the option to create new items in the select box. Set to <code>true</code> to allow users to add new values.`,
    },
    {
      name: 'creatableText',
      type: 'string',
      default: `'Add <b>{value}</b>...'`,
      description: `Specifies the text template for the creatable option. Use <code>'{value}'</code> as a placeholder for the user-entered value.`,
    },
    {
      name: 'createPosition',
      type: 'string',
      default: `'first'`,
      description: `Determines where the newly created item should be placed. Options are <code>'first'</code> (at the beginning) or <code>'last'</code> (at the end).`,
    },
  ]

  return (
    <div>
      <h2 class="fw-bold mb-4">Configuration</h2>
      <p>
        The global configuration for <code>{pkg.libName}</code> can be set by assigning an object to the <code>window.{pkg.libName}Config</code> variable, which will apply to all instances of the component.
      </p>
      <p>
        Alternatively, you can customize the configuration for a specific instance by passing an object directly to the <code>{pkg.libName}</code> constructor.
      </p>
      <p>
        Another option is to set the configuration using data attributes, with option names in "kebab-case" format (e.g., <code>data-max-height="25rem"</code> instead of <code>data-maxHeight="25rem"</code>).
      </p>
      <p>
        <code>{pkg.libName}</code> component configuration prioritizes data attributes, followed by JavaScript object configuration, and finally falls back to global configuration in the <code>window.{pkg.libName}Config</code> variable.
      </p>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <For each={configuration}>{config => (
              <tr>
                <td><code>{config.name}</code></td>
                <td>{config.type}</td>
                <td><code>{config.default}</code></td>
                <td innerHTML={config.description}></td>
              </tr>
            )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface ConfigurationProps {
  name: string
  type: 'boolean' | 'string'
  default: string
  description: string
}
