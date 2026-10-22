// Bootstrap 6 responsive/state utilities use a colon prefix (e.g. `lg:col-8`),
// which PurgeCSS's default extractor splits apart. Keep `:` inside tokens but
// still split on quotes, `=` (Solid strips attribute quotes: `class=radio`),
// whitespace and other characters that never occur in class names.
module.exports = {
  defaultExtractor: content => content.match(/[^<>"'`\s=(){}[\],;!?]*[^<>"'`\s=(){}[\],;!?:]/g) || [],
  safelist: ['use-bootstrap-select', 'use-bootstrap-select-wrapper'],
}
