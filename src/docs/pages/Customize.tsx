import { onMount } from 'solid-js'
import prism from 'prismjs'
import pkg from '../../../package.json'

// codeCustomizeStructure
const codeCustomizeStructure = `your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
│   └── ${pkg.name}/
│       ├── dist/
│       └── scss/
└── index.html`

// codeCustomizeA
const codeCustomizeA = `// Custom.scss
// Option A: Include all of Bootstrap

// Override any tokens with \`@use ... with ()\`. Only the keys you change need to be listed.
@use "../node_modules/bootstrap/scss/bootstrap" with (
  $root-tokens: (
    --border-radius: .25rem,
  ),
);
@use "../node_modules/${pkg.name}/scss/${pkg.name}";

// Then add additional custom code here`

// codeCustomizeB
const codeCustomizeB = `// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include root first (configuration, colors, tokens, and CSS layers)
@use "../node_modules/bootstrap/scss/root";

// 2. Include any other partials as needed
@use "../node_modules/bootstrap/scss/content";
@use "../node_modules/bootstrap/scss/layout";
@use "../node_modules/bootstrap/scss/forms";
@use "../node_modules/bootstrap/scss/buttons";

// 3. Components (${pkg.name} needs forms, menu and chip)
@use "../node_modules/bootstrap/scss/menu";
@use "../node_modules/bootstrap/scss/chip";
// ...

// 4. Helpers and utilities
@use "../node_modules/bootstrap/scss/helpers";
@use "../node_modules/bootstrap/scss/utilities/api";

// 5. Include ${pkg.name}
@use "../node_modules/${pkg.name}/scss/${pkg.name}";

// 6. Add additional custom code here`

// codeCustomizeStates
const codeCustomizeStates = `@use "../node_modules/${pkg.name}/scss/${pkg.name}" with (
  $validation-states: (
    "valid": "success",
    "invalid": "danger",
    "warning": "warning",
  ),
);`

export default function Customize() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Customize</h2>
      <p>Assuming you're using a package manager like npm, you’ll have a file structure that looks like this:</p>
      <pre><code class="language-bash">{codeCustomizeStructure}</code></pre>
      <p>In your <code>custom.scss</code>, you’ll load Bootstrap’s source Sass files with <code>@use</code>. You have two options: include all of Bootstrap, or pick the parts you need.</p>
      <pre><code class="language-css">{codeCustomizeA}</code></pre>
      <pre><code class="language-css">{codeCustomizeB}</code></pre>
      <p>By default, <code>{pkg.name}</code> inherits its style from Bootstrap’s CSS variables (form controls, menus and chips), so anything you change in Bootstrap automatically changes <code>{pkg.name}</code> style as well.</p>
      <p>The validation states that <code>{pkg.name}</code> styles can be configured the same way as Bootstrap’s <code>$validation-states</code>:</p>
      <pre><code class="language-css">{codeCustomizeStates}</code></pre>
      <p>
        Bootstrap 6 writes CSS custom properties without the <code>bs-</code> prefix in its Sass source and adds the prefix at build time with PostCSS.
        {' '}
        <code>{pkg.name}</code> follows the same convention: its Sass output is unprefixed (matching Bootstrap compiled from Sass), while the CSS in <code>dist/</code> is prefixed (matching <code>bootstrap.min.css</code>).
        {' '}
        If you prefix your compiled Bootstrap CSS with <code>postcss-prefix-custom-properties</code>, run <code>{pkg.name}</code> through it as well.
      </p>
      <p>Read more about customizing Bootstrap styles at <a class="text-break" href="https://getbootstrap.com/docs/6.0/customize/sass/" target="_blank">https://getbootstrap.com/docs/6.0/customize/sass/</a>.</p>
    </div>
  )
}
