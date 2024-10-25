const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const checkboxBtn = document.querySelector(".checkboxBtn");

const updateSubmitButtonState = () => {
  if (checkboxBtn.checked) {
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
  }
};

updateSubmitButtonState();

checkboxBtn.addEventListener('change', updateSubmitButtonState);

const handleSubmit = async (event) => {
  event.preventDefault();

  const fullName = document.querySelector(".fullName").value;
  const phoneNumber = document.querySelector(".phoneNumber").value;
  const organization = document.querySelector(".organization").value;
  const telegramLink = document.querySelector(".telegramLink").value;

  const formData = {
    name: fullName,
    phone_number: phoneNumber,
    organization: organization,
    telegram_link: telegramLink,
  };

  try {
    const response = await fetch('https://api.rahmatqr.uz/api/send_form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();

      const fullName = document.querySelector(".fullName");
      const phoneNumber = document.querySelector(".phoneNumber");
      const organization = document.querySelector(".organization");
      const telegramLink = document.querySelector(".telegramLink");

      fullName.value = ''
      phoneNumber.value = ''
      organization.value = ''
      telegramLink.value = ''

      showSnackbar()

    } else {
      console.error('Form submission failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

contactForm.addEventListener('submit', handleSubmit);
