# Zepto-compatible jQuery `clearInput` Plugin
A simple plugin that clears input values on focus. If the user does not enter a new value into the field, then the original value (stored as `data-initial-value`) is restored.

## Usage
`clearInput` takes two arguments:
  1. `delegate`: A selector string representing the elements that should trigger the `focus` and `blur` events (although the events will only be attached to the elements invoking the plugin). Defaults to `'input'`, unless the element invoking the plugin is itself an input element, in which case this will be `null`.
  2. `focusedClass`: The CSS class to be applied to focused elements. Defaults to `is-focused`.

Example:

```javascript
// Events are attached to `document.body` but delegated
// to `.js-clear` input elements. On focus, the `data-initial-value`
// attribute is populated with the input's initial value.
$(document.body).clearInput('.js-clear');
```