document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const contactForm = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");
  const contactConfirmation = document.getElementById("contactConfirmation");

  // Handle booking form submission
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name");
    const service = formData.get("service");
    const time = formData.get("time");

    // Basic validation
    if (!name || !service || !time) {
      confirmation.style.color = "red";
      confirmation.innerText = "Please fill all booking details.";
      return;
    }

    confirmation.style.color = "green";
    confirmation.innerText = `Thank you, ${name}! Your appointment for ${service} at ${time} has been received.`;
    bookingForm.reset();
  });

  // Handle contact form submission
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const contactName = formData.get("contactName");
    const contactEmail = formData.get("contactEmail");
    const message = formData.get("message");

    if (!contactName || !contactEmail || !message) {
      contactConfirmation.style.color = "red";
      contactConfirmation.innerText = "Please complete all contact fields.";
      return;
    }

    contactConfirmation.style.color = "green";
    contactConfirmation.innerText = `Thanks, ${contactName}. We will get back to you at ${contactEmail}.`;
    contactForm.reset();
  });
});
