const subscribeBtn = document.querySelector('.subscribe-btn');
const watchVideoBtn = document.querySelector('.watch-video-btn');
subscribeBtn.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/channel/UCv9bWHC0DIn-Xb7ALNoOGWQ';
});

watchVideoBtn.addEventListener('click', () => {
  window.location.href = 'https://youtu.be/Gf9wLsCJDqc?si=yh18aqhwwmPTFb-o';
});
const educationInfo = document.querySelector('.education-info');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const educationInfoTop = educationInfo.offsetTop;

  if (scrollPosition >= educationInfoTop) {
    educationInfo.style.opacity = 1;
  }
});
const educationSection = document.querySelector('.education-info');
const digitalEducationSection = document.querySelector('.digital-education-info');
const growingEconomySection = document.querySelector('.growing-economy-info');
educationSection.addEventListener('click', () => {
  digitalEducationSection.classList.add('hide');
  growingEconomySection.classList.add('hide');
  educationSection.classList.remove('hide');
});

digitalEducationSection.addEventListener('click', () => {
  educationSection.classList.add('hide');
  growingEconomySection.classList.add('hide');
  digitalEducationSection.classList.remove('hide');
});

growingEconomySection.addEventListener('click', () => {
  educationSection.classList.add('hide');
  digitalEducationSection.classList.add('hide');
  growingEconomySection.classList.remove('hide');
});
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const id = event.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
const dropdownButton = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});
function submitForm() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const concern = document.getElementById('concern').value;
  const submissionMessage = document.getElementById('submission-message');
  if (!name || !phone || !email || !concern) {
      submissionMessage.textContent = 'Please fill in all fields.';
      submissionMessage.style.color = 'red';
  } else if (!isValidEmail(email)) {
      submissionMessage.textContent = 'Invalid email address.';
      submissionMessage.style.color = 'red';
  } else {
      submissionMessage.textContent = 'Thanks for your submission!';
      submissionMessage.style.color = 'green';
  }
}
function isValidEmail(email) {
  return email.trim() !== '';
}
