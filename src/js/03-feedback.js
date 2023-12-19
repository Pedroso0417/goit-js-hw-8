import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  // Throttle the function to run at most once every 500 milliseconds
  const throttleUpdateStorage = throttle(updateStorage, 500);

  const form = document.querySelector('.feedback-form');

  // Track input event on the form
  form.addEventListener('input', function () {
    throttleUpdateStorage();
  });

  // Load stored data on page load
  loadStoredData();

  // Submit form
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
  });
});

function updateStorage() {
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadStoredData() {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const formData = JSON.parse(storedData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

function submitForm() {
  // Display form data in the console
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };
  console.log('Form data submitted:', formData);

  // Clear storage and form fields
  localStorage.removeItem('feedback-form-state');
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
}
