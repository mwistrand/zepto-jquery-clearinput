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