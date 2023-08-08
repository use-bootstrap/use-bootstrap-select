export function Methods() {
  return (
    <>
      <h2 className="fw-bold" id="methods">Methods</h2>
      <div className="table-responsive">
        <table className="table table-bordered" style={{ maxWidth: 600 }}>
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
              <td><code>setValue</code></td>
              <td className="text-nowrap"><code>string</code></td>
              <td><code>void</code></td>
              <td>
                <pre className="mb-0"><code className="language-javascript">example.setValue('chrome')</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>removeValue</code></td>
              <td><code>string</code></td>
              <td><code>void</code></td>
              <td>
                <pre className="mb-0"><code className="language-javascript">example.removeValue('chrome')</code></pre>
              </td>
            </tr>
            <tr>
              <td><code>getValue</code></td>
              <td><code>null</code></td>
              <td><code>string | array</code></td>
              <td>
                <pre className="mb-0"><code className="language-javascript">example.getValue()</code></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
