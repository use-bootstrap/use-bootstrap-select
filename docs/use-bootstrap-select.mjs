function UseBootstrapSelect(target, bootstrapInstance) {
  const { ubSelectClear, ubSelectSearch, ubSelectCreate, ubSelectMaxHeight } = target.dataset;
  const isClear = ubSelectClear !== void 0;
  const isSearch = ubSelectSearch !== void 0;
  const isCreate = ubSelectCreate !== void 0;
  const maxHeight = ubSelectMaxHeight || "25rem";
  const isMultiple = target.multiple;
  const isDisabled = target.disabled;
  const classDropdown = "use-bootstrap-select";
  const classDropdownToggle = "d-flex align-items-center gap-1 text-start";
  const classDropdownToggleContentWrapper = classDropdownToggle.replace("text-start", "flex-wrap");
  const classDropdownMenu = "dropdown-menu w-100";
  const classClearButton = "ms-auto link-secondary d-inline-flex";
  const classSearchInput = "form-control shadow-none";
  const classHidden = "d-none";
  const classTag = "d-inline-flex align-items-center gap-1 px-2 text-bg-secondary";
  const paddingDropdownItem = "var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)";
  const xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  function createElement(tagName, config) {
    const element = document.createElement(tagName);
    if (config) {
      for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
          const value = config[key];
          element[key] = value;
        }
      }
    }
    return element;
  }
  function getComputedSize(element, property) {
    return Number.parseFloat(window.getComputedStyle(element).getPropertyValue(property)) / 16;
  }
  const nextElement = target.nextElementSibling;
  if (nextElement && nextElement.classList.contains(classDropdown)) {
    nextElement.remove();
  }
  const dropdown = createElement("div", {
    className: `dropdown ${classDropdown}`
  });
  const dropdownToggle = createElement("button", {
    type: "button",
    disabled: isDisabled,
    className: `${classDropdownToggle} ${target.classList.value}`
  });
  dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
  dropdownToggle.setAttribute("aria-expanded", "false");
  const dropdownToggleContentWrapper = createElement("div", {
    className: classDropdownToggleContentWrapper
  });
  dropdownToggle.append(dropdownToggleContentWrapper);
  const dropdownMenu = createElement("div", {
    className: classDropdownMenu
  });
  dropdownMenu.style.maxHeight = maxHeight;
  const dropdownMenuContentWrapper = createElement("div");
  dropdownMenu.append(dropdownMenuContentWrapper);
  let clearButton;
  if (isClear) {
    clearButton = createElement("span", {
      className: `${classHidden} ${classClearButton}`,
      title: "Clear selection",
      innerHTML: xIcon
    });
    dropdownToggle.append(clearButton);
  }
  let searchInput;
  let searchNoResults;
  if (isSearch) {
    searchInput = createElement("input", {
      type: "text",
      className: classSearchInput,
      placeholder: "Search"
    });
    target.classList.contains("form-select-sm") && searchInput.classList.add("form-control-sm");
    target.classList.contains("form-select-lg") && searchInput.classList.add("form-control-lg");
    const div = createElement("div");
    div.style.padding = paddingDropdownItem;
    div.append(searchInput);
    dropdownMenu.prepend(div);
    searchNoResults = createElement("div", {
      textContent: "No results found",
      className: classHidden
    });
    searchNoResults.style.padding = paddingDropdownItem;
    dropdownMenu.append(searchNoResults);
  }
  target.insertAdjacentElement("afterend", dropdown);
  target.classList.add(classHidden);
  dropdown.append(dropdownToggle);
  dropdownMenu.style.fontSize = `${getComputedSize(dropdownToggle, "font-size")}rem`;
  dropdown.append(dropdownMenu);
  const instance = (bootstrapInstance ?? bootstrap).Dropdown.getOrCreateInstance(dropdownToggle);
  const dropdownToggleBorderRadius = getComputedSize(dropdownToggle, "border-radius");
  const tagBorderRadius = dropdownToggleBorderRadius > 0.0625 ? dropdownToggleBorderRadius - 0.0625 : 0;
  function hasPlaceholder() {
    return target.options.length > 0 && target.options[0].value === "";
  }
  function createPlaceholder(option) {
    const span = createElement("span", {
      innerHTML: option.innerHTML
    });
    span.style.color = "var(--bs-secondary-color)";
    return span;
  }
  function setSelectedOption(value, selected) {
    Array.from(target.options).forEach((i) => i.value === value && (i.selected = selected));
  }
  function triggerChange() {
    target.dispatchEvent(new Event("change"));
  }
  function removeValue(value) {
    setSelectedOption(value, false);
    triggerChange();
  }
  function createTag(option) {
    const outerSpan = createElement("span", {
      className: `${classTag}${isDisabled ? " bg-opacity-50" : ""}`,
      textContent: option.innerHTML
    });
    if (tagBorderRadius > 0) {
      outerSpan.style.borderRadius = `${tagBorderRadius}rem`;
    }
    const innerSpan = createElement("span", {
      className: "d-inline-flex",
      innerHTML: xIcon
    });
    if (!isDisabled) {
      innerSpan.onclick = () => {
        instance.toggle();
        removeValue(option.value);
      };
    }
    outerSpan.prepend(innerSpan);
    return outerSpan;
  }
  function getDropdownToggleContent() {
    const selected = Array.from(target.selectedOptions);
    selected.length < 1 && isMultiple && hasPlaceholder() && selected.push(target.options[0]);
    return selected.map((option) => option.value === "" ? createPlaceholder(option) : isMultiple ? createTag(option) : option.innerHTML);
  }
  function setValue(value) {
    setSelectedOption(value, true);
    value !== "" && setSelectedOption("", false);
    triggerChange();
  }
  function createDropdownItem(option, insideOptGroup = false) {
    const button = createElement("button", {
      type: "button",
      disabled: option.selected && isMultiple || option.disabled,
      innerHTML: option.innerHTML,
      className: `dropdown-item${option.selected ? " active" : ""}`
    });
    if (insideOptGroup) {
      button.style.paddingLeft = "calc(var(--bs-dropdown-item-padding-x) * 2)";
    }
    button.addEventListener("click", () => {
      setValue(option.value);
      dropdownToggle.focus();
    });
    return button;
  }
  function getDropdownMenuContent() {
    const items = [];
    target.querySelectorAll(":scope>*").forEach((option) => {
      if (option instanceof HTMLOptionElement) {
        option.value !== "" && items.push(createDropdownItem(option));
      }
      if (option instanceof HTMLOptGroupElement) {
        const header = createElement("h6", {
          className: "dropdown-header",
          innerHTML: option.label
        });
        items.push(header);
        option.querySelectorAll("option").forEach((opt) => items.push(createDropdownItem(opt, true)));
      }
    });
    return items;
  }
  function getValue() {
    return isMultiple ? Array.from(target.selectedOptions).map((i) => i.value) : target.value;
  }
  function shouldClearButtonHidden() {
    const theValue = getValue();
    const value = (Array.isArray(theValue) ? theValue : [theValue]).filter((v) => v !== "");
    return value.length < 1;
  }
  function toggleValidityClass() {
    const form = target.form;
    if (form) {
      dropdownToggle.classList.remove("is-valid", "is-invalid");
      form.classList.contains("was-validated") && dropdownToggle.classList.add(target.validity.valid ? "is-valid" : "is-invalid");
    }
  }
  function update() {
    dropdownToggleContentWrapper.innerHTML = "";
    dropdownMenuContentWrapper.innerHTML = "";
    getDropdownToggleContent().reverse().forEach((i) => dropdownToggleContentWrapper.prepend(i));
    getDropdownMenuContent().forEach((i) => dropdownMenuContentWrapper.append(i));
    if (isClear && clearButton) {
      shouldClearButtonHidden() ? clearButton.classList.add(classHidden) : clearButton.classList.remove(classHidden);
    }
    if (searchInput) {
      searchInput.value = "";
    }
    toggleValidityClass();
  }
  update();
  function listen() {
    dropdownToggle.addEventListener("shown.bs.dropdown", () => {
      if (searchInput) {
        searchInput.focus();
      } else {
        const active = dropdownMenuContentWrapper.querySelector(".active");
        active && active.focus();
      }
    });
    if (clearButton) {
      clearButton.addEventListener("click", (e) => {
        e.stopPropagation();
        instance.toggle();
        Array.from(target.options).forEach((i) => i.selected = false);
        hasPlaceholder() && (target.value = "");
        triggerChange();
      });
    }
    const input = searchInput;
    if (input) {
      input.addEventListener("keyup", (e) => {
        const value = input.value.trim();
        let found = 0;
        dropdownMenuContentWrapper.querySelectorAll("button").forEach((button) => {
          button.classList.add(classHidden);
          if (button.innerHTML.toLowerCase().includes(value.toLowerCase())) {
            button.classList.remove(classHidden);
            found++;
          }
        });
        if (searchNoResults) {
          if (found > 0) {
            searchNoResults.classList.add(classHidden);
          } else {
            searchNoResults.classList.remove(classHidden);
            if (isCreate) {
              searchNoResults.innerHTML = `Press Enter to add "<b>${value}</b>"`;
              if (e.key === "Enter") {
                const newOption = createElement("option", {
                  value,
                  selected: true,
                  textContent: value
                });
                target.add(newOption, target.firstChild);
                instance.toggle();
                triggerChange();
                dropdownToggle.focus();
                searchNoResults.classList.add(classHidden);
              }
            }
          }
        }
      });
    }
    const form = target.form;
    if (form) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            toggleValidityClass();
          }
        });
      });
      observer.observe(form, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }
    target.addEventListener("change", () => update());
  }
  listen();
  return { setValue, getValue, removeValue };
}

export { UseBootstrapSelect };
