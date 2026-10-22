import autoprefixer from 'autoprefixer'
import prefixCustomProperties from 'postcss-prefix-custom-properties'

// Bootstrap 6 writes custom properties unprefixed in Sass and adds the `bs-`
// prefix with PostCSS at build time. Do the same here so the compiled CSS
// matches Bootstrap's dist CSS. Already-prefixed names (e.g. from
// bootstrap.min.css) are left untouched.
export default {
  plugins: [
    prefixCustomProperties({ prefix: 'bs-', ignore: [/^bs-/] }),
    autoprefixer(),
  ],
}
