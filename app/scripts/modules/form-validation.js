const formValidation = function() {

  require('./../../../bower_components/parsleyjs/dist/parsley');

  $(document).ready(function() {

    const $loginForm = $('.js-login-form');
    const $registrationForm = $('.js-registration-form');

    $loginForm.parsley({
      errorsWrapper : '<div></div>',
      errorTemplate : '<p class="input-helper alert alert-danger"></p>',
      inputs        : 'input, textarea, select, input[type=hidden]',
      excluded      : 'input[type=file], :disabled'
    });

    $registrationForm.parsley({
      errorsWrapper : '<div></div>',
      errorTemplate : '<p class="input-helper alert alert-danger"></p>',
      inputs        : 'input, textarea, select, input[type=hidden]',
      excluded      : 'input[type=file], :disabled'
    });

  });
}

module.exports = new formValidation();
