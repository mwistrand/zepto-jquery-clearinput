/**
 * A simple plugin that clears input values on focus. If the user
 * does not enter a new value into the field, then the original
 * value (stored as `data-initial-value`) is restored.
 *
 * USAGE
   `$(document.body).clearInput('.js-clear');`
 *
 * @param delegate A selector string representing which elements should
 *                 trigger the focus/blur events. Defaults to 'input',
 *                 unless the element invoking the plugin is itself an input.
 * @param focusedClass The CSS class added to the input on focus. Defaults
 *                     to 'is-focused'.
 *
 * @returns `this`
 */
(function($) {
'use strict';

$.fn.clearInput = function(delegate, focusedClass) {
  return this.each(function(i) {
    var $el = $(this);
    
    delegate || (delegate = this.nodeName === 'INPUT' ? null : 'input');
    focusedClass || (focusedClass = 'is-focused');
    
    $el.on({
      focus: function(e) {
        var $input = $(e.currentTarget),
          value = $input.val();

        if (value !== '') {
          $input.data('initial-value', value);
        }

        $input.addClass(focusedClass).val('');
      },

      blur: function(e) {
        var $input = $(e.currentTarget);

        $input.removeClass(focusedClass);

        if (!$input.val()) {
          $input.val($input.data('initial-value') || '');
        }
      }
    }, delegate);
  });
};
  
})(window.Zepto || window.jQuery);