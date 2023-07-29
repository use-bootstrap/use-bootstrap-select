
# use-bootstrap-select

**use-bootstrap-select** allows you to create a select element using the native Bootstrap 5 dropdown UI.


## Features

- **Tag-Like Appearance**: Displays selected choices like tags in multiple mode.
- **Clearable**: Enables users to easily remove selected options.
- **Searchable**: Allows users to search and find options easily.
- **Creatable**: Supports creating custom options.
- **Sizing**: Adjustable sizing to match user preferences or layouts.
- **Validation**: Reflects validation states visually to align with Bootstrap's form validation feedback.
## Installation

Install use-bootstrap-select from npm:

```bash
npm install use-bootstrap-select
```

## Usage/Examples

After installation, you can import the library into your project as follows

```javascript
import 'use-bootstrap-select/dist/use-bootstrap-select.css'
import { UseBootstrapSelect } from 'use-bootstrap-select'
```

or, since it also comes with an IIFE bundle, you can insert it directly into your HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://unpkg.com/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="node_modules/use-bootstrap-select/dist/use-bootstrap-select.min.css" rel="stylesheet">
  </head>
  <body>
    <select class="form-select" id="example">
      <option value="brave">Brave</option>
      <option value="chrome" selected>Chrome</option>
      <option value="edge">Edge</option>
      <option value="firefox">Firefox</option>
      <option value="opera">Opera</option>
      <option value="safari">Safari</option>
    </select>
    <script src="https://unpkg.com/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="node_modules/use-bootstrap-select/dist/use-bootstrap-select.min.js"></script>
  </body>
</html>
```

Once you imported the library, you can initiate it

```javascript
const example = new UseBootstrapSelect(document.getElementById('example'))
```


## Options

All options are embedded in attributes:

```html
data-ub-select-clear
data-ub-select-search
data-ub-select-create
data-ub-select-max-height
```

```html
<select data-ub-select-clear data-ub-select-search data-ub-select-create data-ub-select-max-height="25rem">...</select>
```
## Methods

| Name        | Params | Returns         | Example                           |
|-------------|--------|-----------------|-----------------------------------|
| setValue    | string | void            | `example.setValue('chrome')`    |
| removeValue | string | void            | `example.removeValue('chrome')` |
| getValue    | null   | string \| array | `example.getValue()`             |

## License

[MIT](./LICENSE)
