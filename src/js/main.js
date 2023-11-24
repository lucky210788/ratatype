document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formLogin');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  function isValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(input.value.trim());
    updateValidationStatus(input, isValid);
    return isValid;
  }

  function isRequired(input) {
    const isFilled = input.value.trim() !== '';
    updateValidationStatus(input, isFilled);
    return isFilled;
  }

  function updateValidationStatus(input, isValid) {
    const action = isValid ? 'remove' : 'add';
    input.parentElement.classList[action]('has-error');
  }

  function getFormData(form) {
    const formData = {};
    const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (element.tagName === 'INPUT' && element.hasAttribute('name')) {
        formData[element.name] = element.value;
      }
    }

    return formData;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isRequired(password);

    if (isEmailValid && isPasswordValid) {
      const formData = getFormData(form);
      console.log(formData);
    }
  });

  email.addEventListener('input', () => isValidEmail(email));
  password.addEventListener('input', () => isRequired(password));
});
