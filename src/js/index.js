import '../scss/main.scss';
const aboutflipper = document.getElementById('about__flipper'),
  aboutContactBtn = document.getElementById('about__contact-btn'),
  aboutFormReturnBtn = document.getElementById('about__form-return'),
  leftReviewBtn = document.getElementById('reviews__navigation-listitem-firstrow'),
  rightReviewBtn = document.getElementById('reviews__navigation-listitem-secondrow'),
  reviewFlipper = document.getElementById('reviews__flipper'),
  aboutFlipBtns = [aboutFormReturnBtn, aboutContactBtn, aboutflipper],
  reviewSlideBtns = [leftReviewBtn, rightReviewBtn, reviewFlipper];

[aboutFlipBtns, reviewSlideBtns].forEach(arr => {
  arr.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.id !== arr[0].id ? arr[arr.length - 1].checked = true : arr[arr.length - 1].checked = false;
    })
  })
});