import { onMount } from 'solid-js'
import prism from 'prismjs'

export default function Methods() {
  onMount(() => {
    prism.highlightAll()
  })

  return (
    <div>
      <h2 class="fw-bold mb-4">Methods</h2>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Params</th>
              <th>Returns</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>show</code></td>
              <td></td>
              <td></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.show()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>hide</code></td>
              <td></td>
              <td></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.hide()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>toggle</code></td>
              <td></td>
              <td></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.toggle()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>getValue</code></td>
              <td></td>
              <td><code>string | string[] | null</code></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.getValue()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>setValue</code></td>
              <td class="text-nowrap"><code>string | string[]</code></td>
              <td></td>
              <td>
                <pre class="mb-1"><code class="language-javascript">example.setValue('banana')</code></pre>
                <pre class="mb-0"><code class="language-javascript">example.setValue(['banana', 'grape'])</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>addValue</code></td>
              <td class="text-nowrap"><code>string | string[]</code></td>
              <td></td>
              <td>
                <pre class="mb-1"><code class="language-javascript">example.addValue('banana')</code></pre>
                <pre class="mb-0"><code class="language-javascript">example.addValue(['banana', 'grape'])</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>removeValue</code></td>
              <td class="text-nowrap"><code>string | string[]</code></td>
              <td></td>
              <td>
                <pre class="mb-1"><code class="language-javascript">example.removeValue('banana')</code></pre>
                <pre class="mb-0"><code class="language-javascript">example.removeValue(['banana', 'grape'])</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>addOption</code></td>
              <td class="text-nowrap">
                <code>value: string</code><br />
                <code>text?: string</code><br />
                <code>selected?: boolean</code><br />
                <code>position?: "first" | "last"</code>
              </td>
              <td></td>
              <td>
                <pre class="mb-1"><code class="language-javascript">example.addOption('pineapple')</code></pre>
                <pre class="mb-0"><code class="language-javascript">example.addOption('pineapple', 'Pineapple', true, 'last')</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>clearValue</code></td>
              <td></td>
              <td></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.clearValue()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>update</code></td>
              <td></td>
              <td></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">example.update()</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>selectElement</code></td>
              <td></td>
              <td><code>HTMLSelectElement</code></td>
              <td>
                <pre class="mb-0"><code class="language-javascript">const element = example.selectElement()</code></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
