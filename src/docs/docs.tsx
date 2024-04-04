/* @refresh reload */
import { render } from 'solid-js/web'
import 'bootstrap/js/dist/tab'
import prism from 'prismjs'
import App from './App'
import '@fontsource/hind-siliguri/latin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import '../lib/use-bootstrap-select.scss'
import './docs.scss'

prism.manual = true

render(() => <App />, document.getElementById('app')!)
