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
