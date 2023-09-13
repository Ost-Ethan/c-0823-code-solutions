const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();

  const formValues = [];
  formValues.email = $contactForm.elements.email.value;
  formValues.message = $contactForm.elements.message.value;
  formValues.name = $contactForm.elements.name.value;

  console.log('Value of formValues:', formValues);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
