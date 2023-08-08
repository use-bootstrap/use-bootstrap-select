import codeInstall from '../code/install.html.txt'
import codeImport from '../code/import.js.txt'
import codeIife from '../code/iife.html.txt'

export function Installation() {
  return (
    <>
      <h2 className="fw-bold">Installation</h2>
      <p>Install from npm:</p>
      <pre><code className="language-bash">{codeInstall}</code></pre>
      <p>After installation, you can import the library into your project as follows:</p>
      <pre><code className="language-javascript">{codeImport}</code></pre>
      <p>or, since it also comes with an IIFE bundle, you can insert it directly into your HTML:</p>
      <pre><code className="language-html">{codeIife}</code></pre>
    </>
  )
}
