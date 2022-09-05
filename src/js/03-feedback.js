// Импортируем библиотеку
import throttle from 'lodash.throttle';

// Избавляемся от магических  строк
const KEY_FORM = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input'); // ?
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(dataForm, 500));

populateTextarea();

function dataForm(e) {
  // локальное хранилище - объект с полями email и message
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  formData.email = input.value;
  formData.message = textarea.value;

  console.log(formData);
  e.currentTarget.reset();

  localStorage.removeItem(KEY_FORM);
}

function populateTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(KEY_FORM));
  if (saveMessage) {
    // console.log(' saveMessage', saveMessage);

    input.value = saveMessage.email;
    textarea.value = saveMessage.message;
  }
}
