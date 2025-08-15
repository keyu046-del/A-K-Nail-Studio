const form = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');
const contactConfirmation = document.getElementById('contactConfirmation');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(form);
  const bookingDetails = Object.fromEntries(data.entries());
  confirmation.innerText = `Thank you, ${bookingDetails.name}! Your appointment for ${bookingDetails.service} at ${bookingDetails.time}.`;
  form.reset();
});

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(contactForm);
  const contactDetails = Object.fromEntries(data.entries());
  contactConfirmation.innerText = `Thanks, ${contactDetails.contactName}. We will get back to you at ${contactDetails.contactEmail}.`;
  contactForm.reset();
});