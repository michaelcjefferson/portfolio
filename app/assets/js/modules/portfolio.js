var portfolio = (function() {
  // Cache DOM
  var $item = $('.portfolio-item');
  var $body = $item.find('.portfolio-item__body');
  var $overlay = $item.find('.portfolio-item__overlay');
  var $text = $item.find('.portfolio-item__overlay-text');
  var $blurb = $item.find('.portfolio-item__blurb');

  // Bind Events
  $item.click(focusElement);

  // Declare Methods
  function focusElement() {
    // Find a better solution, so that $(this) doesn't have to be used at all
    var el = $(this);
    $item.removeClass('portfolio-item--grow');
    $body.removeClass('portfolio-item__body--clear');
    $overlay.removeClass('portfolio-item__overlay--center-overlay');
    $text.removeClass('portfolio-item__overlay-text--background');
    $blurb.removeClass('portfolio-item__blurb--show-blurb');
    el.addClass('portfolio-item--grow');
    el.find('.portfolio-item__body').addClass('portfolio-item__body--clear');
    el.find('.portfolio-item__overlay').addClass('portfolio-item__overlay--center-overlay');
    el.find('.portfolio-item__overlay-text').addClass('portfolio-item__overlay-text--background');
    el.find('.portfolio-item__blurb').addClass('portfolio-item__blurb--show-blurb');
  }

  return;
})();



//   $('.portfolio-element').click(function() {
//     $('.portfolio-element').removeClass('grow');
//     $('.portfolio-item').removeClass('clear');
//     $('.portfolio-overlay').removeClass('center-overlay');
//     $('.overlay-text').removeClass('overlay-text-background');
//     $(this).addClass('grow');
//     $(this).children('.portfolio-item').addClass('clear');
//     $(this).children('.portfolio-overlay').addClass('center-overlay');
//     $(this).children('.portfolio-overlay').children('.overlay-text').addClass('overlay-text-background');
//   });
