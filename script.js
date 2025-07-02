const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();   // Stop form submit refresh
  clearErrors();

  let hasError = false;

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    hasError = true;
  }

  if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Email is not valid');
    hasError = true;
  }

  if (passwordInput.value.length < 6) {
    showError(passwordInput, 'Password length must be greater than 6');
    hasError = true;
  }

  if (!hasError) {
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value
    };
    console.log('Form Submitted:', formData);
    form.reset();
  }
});

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  input.style.borderColor = 'red';
}

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(e => e.textContent = '');
  [nameInput, emailInput, passwordInput].forEach(i => i.style.borderColor = '');
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
