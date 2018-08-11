import '../scss/main.scss';
const aboutflipper = document.getElementById('about__flipper'),
  aboutContactBtn = document.getElementById('about__contact-btn'),
  aboutFormReturnBtn = document.getElementById('about__form-return'),
  leftReviewBtn = document.getElementById('reviews__navigation-listitem-firstrow'),
  rightReviewBtn = document.getElementById('reviews__navigation-listitem-secondrow'),
  reviewFlipper = document.getElementById('reviews__flipper'),
  aboutFlipBtns = [aboutFormReturnBtn, aboutContactBtn, aboutflipper],
  reviewSlideBtns = [leftReviewBtn, rightReviewBtn, reviewFlipper],
  portfolioProjects = Array.from(document.getElementsByClassName('portfolio__card')),
  categoryBtns = Array.from(document.getElementsByClassName('portfolio__categories-item'));

[aboutFlipBtns, reviewSlideBtns].forEach(arr => {
  arr.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.id !== arr[0].id ? arr[arr.length - 1].checked = true : arr[arr.length - 1].checked = false;
    });
  });
});

categoryBtns.forEach(i => {
  i.addEventListener('click', function (e) {
    e.preventDefault();
    portfolioProjects.forEach(project => {
      project.hidden = false;
      project.style.transform = 'scale(0)';
      setTimeout(function () {
        project.style.opacity = 1;
        project.style.transform = 'scale(1.0)';
      }, 100);
      if (project.dataset.category !== i.id && i.id !== 'all') {
        project.style.transform = 'scale(0)';
        setTimeout(function () {
          project.hidden = true;
        }, 100);
      }
    })
  })
});