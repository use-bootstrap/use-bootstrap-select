v3.0.0 (Major version, Breaking Changes)
  - Migrated to Bootstrap 6. Bootstrap 5 is no longer supported.
  - Use `class="form-control"` on the `<select>` instead of `form-select` (and `form-control-sm` / `form-control-lg` for sizes), following Bootstrap 6.
  - The dropdown is rendered with Bootstrap 6 `.menu` / `.menu-item` / `.menu-header` classes and selected items in multiple mode use `.chip`.
  - The Sass source now uses `@use` and no longer depends on Bootstrap's Sass variables; CSS custom properties are unprefixed in Sass output and `bs-` prefixed in `dist/`.
  - Added support for Bootstrap 6 floating labels: wrap the `<label>` and `<select>` in `.form-floating`.

v2.2.1
  - Fix search entry is not removed with multiple selection.

v2.2.0
  - Added a new static method: `clearAll`.

v2.1.1
  - Fix show method not focusing on input.

v2.1.0
  - Added new methods: `show`, `hide`, and `toggle`.

v2.0.0 (Major version, Breaking Changes)
  - Now initialization must be done using classes instead of functions. (e.g., `new UseBootstrap(target)` instead of `UseBootstrap(target)`).
  - Configuration attribute has been changed from "data-ub-select-[config]" to "data-[config]". (e.g., `data-clearable="true"` instead of `data-ub-select-clear`).
  - The use-bootstrap-select now works without Bootstrap JavaScript.
  - The dropdown menu position is now static, you can configure it to be shown on the down or up.
  - Added several new methods.
