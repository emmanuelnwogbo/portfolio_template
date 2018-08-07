import '../scss/main.scss';
const flipper = document.getElementById('about__flipper');
document.getElementById('about__contact-btn').addEventListener('click', function (e) {
  e.preventDefault();
  if (!flipper.checked) {
    flipper.checked = true;
  }
});

document.getElementById('about__form-return').addEventListener('click', function (e) {
  e.preventDefault();
  if (flipper.checked) {
    flipper.checked = false;
  }
});