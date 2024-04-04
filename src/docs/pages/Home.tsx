import { For } from 'solid-js'
import pkg from '../../../package.json'

export default function Home() {
  const badges = [
    {
      src: 'npm/v',
      alt: 'version',
    },
    {
      src: 'bundlephobia/minzip',
      alt: 'minified + gzip',
    },
    {
      src: 'npm/dm',
      alt: 'downloads per month',
    },
    {
      src: 'npm/types',
      alt: 'types',
    },
  ]

  return (
    <div>
      <h3 class="fw-bold">{pkg.name}</h3>
      <p>{pkg.description}</p>
      <div class="d-flex flex-wrap gap-2">
        <For each={badges}>
          {badge => <img src={`https://img.shields.io/${badge.src}/${pkg.name}${badge.src.startsWith('bundle') ? `/${pkg.version}` : ''}`} alt={badge.alt} />}
        </For>
      </div>
      <hr />
      <h4 class="fw-bold">Features</h4>
      <ul class="text-body-secondary">
        <li><b>Tag-Like Appearance</b>: Displays selected choices like tags in multiple mode.</li>
        <li><b>Clearable</b>: Enables users to easily remove selected options.</li>
        <li><b>Searchable</b>: Allows users to search and find options easily.</li>
        <li><b>Creatable</b>: Supports creating custom options.</li>
        <li><b>Sizing</b>: Adjustable sizing to match user preferences or layouts.</li>
        <li><b>Validation</b>: Reflects validation states visually to align with Bootstrap's form validation feedback.</li>
      </ul>
      <hr />
      <h4 class="fw-bold">Repository</h4>
      <a class="link-body-emphasis" href={pkg.repository} target="_blank">{pkg.repository}</a>
      <hr />
      <h4 class="fw-bold">License</h4>
      {pkg.license}
    </div>
  )
}
