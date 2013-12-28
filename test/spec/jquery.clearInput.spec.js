describe('$ plugin to clear input values', function() {
  'use strict';

  var $input,
    $container;

  beforeEach(function() {
    loadFixtures('inputs.html');

    $container = $('.container');
    $input = $('input');
  });
  afterEach(function() {
    $container.empty().remove();
  });

  it('stores the initial of an input on focus', function() {
    $container.clearInput();
    $input.focus();

    expect($input.data('initial-value')).toEqual('Lorem ipsum');
  });

  it('restores the original value on blur', function() {
    $container.clearInput();
    $input.focus().blur();

    expect($input.val()).toEqual('Lorem ipsum');
  });

  it('does not restore the original value if a new value is entered',
      function() {
    $container.clearInput();
    $input.focus().val('New value').blur();

    expect($input.val()).toEqual('New value');
  });

  it('can be called directly on HTML input elements', function() {
    $input.clearInput().focus();

    expect($input.val()).toEqual('');
  });

  it('can be passed a delegate selector', function() {
    $container.clearInput('.js-clear');
    $input.focus();
    expect($input.val()).toEqual('');
  });

  it('adds the specified class on focus', function() {
    $container.clearInput('input', 'focused');
    $input.focus();
    expect($input).toHaveClass('focused');
  });

  it('removes the specified class on blur', function() {
    $container.clearInput('input', 'focused');
    $input.focus().blur();
    expect($input).not.toHaveClass('focused');
  });
});