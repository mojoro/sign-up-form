const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-pass');

const passParent = document.querySelector('.pass-parent');
const passConfirmParent = document.querySelector('.confirm-parent');

function validatePassword() {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity("Passwords Don't Match");
    passwordConfirm.classList.add('error');
    password.classList.add('error');
    passwordConfirm.classList.remove('success');
    password.classList.remove('success');

    passParent.classList.add('error-parent');
  } else {
    passwordConfirm.setCustomValidity('');
    passwordConfirm.classList.remove('error');
    password.classList.remove('error');
    passwordConfirm.classList.add('success');
    password.classList.add('success');

    passParent.classList.remove('error-parent');
  }
}

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validatePassword);