import '../scss/main.scss';
const aboutflipper = document.getElementById('about__flipper'),
  aboutContactBtn = document.getElementById('about__contact-btn'),
  aboutFormReturnBtn = document.getElementById('about__form-return'),
  leftReviewBtn = document.getElementById('reviews__navigation-listitem-firstrow'),
  rightReviewBtn = document.getElementById('reviews__navigation-listitem-secondrow'),
  reviewFlipper = document.getElementById('reviews__flipper');

[aboutContactBtn, aboutFormReturnBtn].forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    this.id !== 'about__form-return' ? aboutflipper.checked = true : aboutflipper.checked = false;
  });
});

[leftReviewBtn, rightReviewBtn].forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    this.id === 'reviews__navigation-listitem-secondrow' ? reviewFlipper.checked = true : reviewFlipper.checked = false;
  });
});