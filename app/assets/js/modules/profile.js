var profile = (function() {
  // Cache DOM
  var $profile = $('.profile');
  var $close = $profile.find('.profile-close');

  // Bind Events
  $close.click(closeProfile);

  // Declare Methods
  function closeProfile() {
    $profile.addClass('profile--fade-profile');
    setTimeout(function() {
      $profile.addClass('profile--move-back');
    }, 1000);
  }

  return {
    closeProfile: closeProfile
  }
})();
