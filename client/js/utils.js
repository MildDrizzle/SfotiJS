(function() {

  // Cached input and hide them
  var name  = $('input[type="text"]').parent();
  var email = $('input[type="email"]').parent();
  var pass1 = $( $('input[type="password"]')[0] ).parent();
  var pass2 = $( $('input[type="password"]')[1] ).parent();

  $(email).hide();
  $(pass1).hide();
  $(pass2).hide();

  // Show email input when click on first input
  $(name).on('keypress', function () {
    $(email).show();
  });

  $(email).on('keypress', function () {
    $(pass1).show();
  });

  $(pass1).on('keypress', function () {
    $(pass2).show();
  });

})();
