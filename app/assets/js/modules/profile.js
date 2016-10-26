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



//   $('#close-profile').click(function() {
//     var prof = $('#profile');
//     prof.addClass('fade-profile');
//     setTimeout(function() {
//       prof.addClass('move-back');
//     }, 1000);
//   });
