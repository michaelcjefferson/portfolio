var modal = (function() {
  // Cache DOM
  var $modal = $('.modal');
  var $open = $('body').find('.profile-links__link--open-modal');
  var $close = $modal.find('.modal__close-modal');

  // Bind Events
  $open.click(openModal(event));
  $close.click(closeModal);

  // Declare Methods
  function openModal() {
    return function(event) {
      // Prevent the page from reloading when open modal button is clicked on portfolio page
      event.preventDefault();
      $modal.addClass('modal--is-open');
    }
  }

  function closeModal() {
    $modal.removeClass('modal--is-open');
  }

  return {
    openModal: openModal,
    closeModal: closeModal
  }
})();




//   $('.btn-cta').click(function () {
//     $('.modal-overlay').addClass('is-open');
//   });
//   $('#close-btn').click(function () {
//     $('.modal-overlay').removeClass('is-open');
//   });
