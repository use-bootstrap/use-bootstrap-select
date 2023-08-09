/* eslint-disable n/prefer-global/process */
import { BsGithub } from 'react-icons/bs/index.js'
import { FiMoon, FiSun } from 'react-icons/fi/index.js'
import { AiOutlineSelect } from 'react-icons/ai/index.js'
import pkg from '../../../package.json'
import style from '../style.css.txt'
import script from '../script.js.txt'
import { Features } from '../content/Features'
import { Installation } from '../content/Installation'
import { Example } from '../content/Example'
import { Methods } from '../content/Methods'

export default function () {
  const isDev = process.argv.includes('dev')
  const css = [
    'https://cdn.statically.io/gh/twbs/bootstrap/main/dist/css/bootstrap.min.css',
    isDev ? 'use-bootstrap-select.css' : 'use-bootstrap-select.min.css',
    'https://cdn.statically.io/gh/PrismJS/prism/master/themes/prism-tomorrow.min.css',
    'https://fonts.upset.dev/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap',
  ]
  const js = [
    'https://cdn.statically.io/gh/twbs/bootstrap/main/dist/js/bootstrap.bundle.min.js',
    isDev ? 'use-bootstrap-select.js' : 'use-bootstrap-select.min.js',
    'https://cdn.statically.io/gh/PrismJS/prism/master/prism.min.js',
    'https://cdn.statically.io/gh/desandro/masonry/master/dist/masonry.pkgd.min.js',
  ]
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={pkg.description} />
        <meta name="keywords" content={pkg.keywords.join(', ')} />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        {css.map(href => <link key={href} rel="stylesheet" href={href} />)}
        <title>{`${pkg.name} | ${pkg.description}`}</title>
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container justify-content-start">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <AiOutlineSelect />
              {pkg.name}
            </a>
            <small className="small">v{pkg.version}</small>
            <div className="ms-auto d-flex align-items-center gap-3">
              <a className="fs-5 link-body-emphasis" href={pkg.repository} target="_blank">
                <BsGithub />
              </a>
              <div>
                <input type="checkbox" className="btn-check" id="bs-theme" autoComplete="off" />
                <label className="btn p-0 border-0 fs-5" htmlFor="bs-theme" id="bs-theme-dark" data-bs-toggle="tooltip" data-bs-offset="0,15" title="Toggle dark mode"><FiMoon /></label>
                <label className="btn p-0 border-0 fs-5" htmlFor="bs-theme" id="bs-theme-light" data-bs-toggle="tooltip" data-bs-offset="0,15" title="Toggle light mode"><FiSun /></label>
              </div>
            </div>
          </div>
        </nav>
        <div className="container py-3">
          <p className="text-body-secondary">{pkg.description}</p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="features-tab" data-bs-toggle="tab" data-bs-target="#features-tab-pane" type="button" role="tab" aria-controls="features-tab-pane" aria-selected="true">Features</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="installation-tab" data-bs-toggle="tab" data-bs-target="#installation-tab-pane" type="button" role="tab" aria-controls="installation-tab-pane" aria-selected="false">Installation</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="example-tab" data-bs-toggle="tab" data-bs-target="#example-tab-pane" type="button" role="tab" aria-controls="example-tab-pane" aria-selected="false">Example</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="methods-tab" data-bs-toggle="tab" data-bs-target="#methods-tab-pane" type="button" role="tab" aria-controls="methods-tab-pane" aria-selected="false">Methods</button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane pt-4 show active" id="features-tab-pane" role="tabpanel" aria-labelledby="features-tab" tabIndex={0}>
              <Features />
            </div>
            <div className="tab-pane pt-4" id="installation-tab-pane" role="tabpanel" aria-labelledby="installation-tab" tabIndex={0}>
              <Installation />
            </div>
            <div className="tab-pane pt-4" id="example-tab-pane" role="tabpanel" aria-labelledby="example-tab" tabIndex={0}>
              <Example />
            </div>
            <div className="tab-pane pt-4" id="methods-tab-pane" role="tabpanel" aria-labelledby="methods-tab" tabIndex={0}>
              <Methods />
            </div>
          </div>
        </div>
        {js.map(src => <script key={src} src={src}></script>)}
        <script dangerouslySetInnerHTML={{ __html: script }}></script>
      </body>
    </html>
  )
}
