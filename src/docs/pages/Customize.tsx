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

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/${pkg.name}/scss/${pkg.name}";

// Then add additional custom code here`

// codeCustomizeB
const codeCustomizeB = `// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in "_utilities.scss"
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Include ${pkg.name}
@import "../node_modules/${pkg.name}/scss/${pkg.name}";

// 9. Add additional custom code here`

export default function Customize() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Customize</h2>
      <p>Assuming you're using a package manager like npm, you’ll have a file structure that looks like this:</p>
      <pre><code class="language-bash">{codeCustomizeStructure}</code></pre>
      <p>In your <code>custom.scss</code>, you’ll import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need.</p>
      <pre><code class="language-css">{codeCustomizeA}</code></pre>
      <pre><code class="language-css">{codeCustomizeB}</code></pre>
      <p>By default, <code>{pkg.name}</code> inherits its style from default bootstrap style, so anything you change in bootstrap automatically changes <code>{pkg.name}</code> style as well.</p>
      <p>Read more about customize bootstrap styles at <a class="text-break" href="https://getbootstrap.com/docs/5.3/customize/sass/" target="_blank">https://getbootstrap.com/docs/5.3/customize/sass/</a>.</p>
    </div>
  )
}
