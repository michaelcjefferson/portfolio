var sendEmail = (function() {
  // Cache DOM
  var $success = $('.success');
  var $modal = $('.modal');
  var $form = $modal.find('.modal__form');
  var $address = $modal.find('.modal__input--text');
  var $message = $modal.find('.modal__message');
  var $submit = $modal.find('.modal__input--submit');

  // Bind Events
  $form.submit(sendMessage(event));

  // Declare Methods
  function sendMessage() {
    return function(event) {
      // Prevent the page from reloading when submit button is clicked
      event.preventDefault();
      var messageData = gatherMessageData(event);
      if (messageData) {
        $.post('/sites/sendEmail', messageData).done(function(data) {
          if (data !== 'OK') {
            alert('I had a problem receiving your message!');
          } else {
            showSuccess();
          }
        });
        closeModal();
        cleanModal();
      }
    }
  }

  function gatherMessageData(event) {
    var address = $address.val();
    if (!/.+@.+\..+/.test(address)) {
      alert('Woops! Seems like a weird email address...');
      return false;
    }
    var message = $message.val();
    var messageData = { address: address, message: message };
    return messageData;
  }

  function closeModal() {
    $modal.removeClass('modal--is-open');
  }

  function showSuccess() {
    $success.addClass('success--show-success');
    setTimeout(hideSuccess, 2000);
  }

  function hideSuccess() {
    $success.removeClass('success--show-success');
  }

  function cleanModal() {
    $address.val('');
    $message.val('');
  }

  return {
    sendMessage: sendMessage,
    gatherMessageData: gatherMessageData,
    closeModal: closeModal,
    showSuccess: showSuccess,
    hideSuccess: hideSuccess,
    cleanModal: cleanModal
  }
})();
