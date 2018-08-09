import '../scss/main.scss';
const flipper = document.getElementById('about__flipper');
const leftReviewBtn = document.getElementById('reviews__navigation-listitem-firstrow');
const rightReviewBtn = document.getElementById('reviews__navigation-listitem-secondrow');
const reviewFlipper = document.getElementById('reviews__flipper');

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

[leftReviewBtn, rightReviewBtn].forEach(btn => {
  btn.addEventListener('click', function () {
    if (btn.id === 'reviews__navigation-listitem-secondrow') {
      return reviewFlipper.checked = true;
    }
    reviewFlipper.checked = false;
  })
})