import '../scss/main.scss';
const container = document.getElementById('container'),
  aboutflipper = document.getElementById('about__flipper'),
  aboutContactBtn = document.getElementById('about__contact-btn'),
  aboutFormReturnBtn = document.getElementById('about__form-return'),
  leftReviewBtn = document.getElementById('reviews__navigation-listitem-firstrow'),
  rightReviewBtn = document.getElementById('reviews__navigation-listitem-secondrow'),
  reviewFlipper = document.getElementById('reviews__flipper'),
  aboutFlipBtns = [aboutFormReturnBtn, aboutContactBtn, aboutflipper],
  reviewSlideBtns = [leftReviewBtn, rightReviewBtn, reviewFlipper],
  portfolioProjects = Array.from(document.getElementsByClassName('portfolio__card')),
  categoryBtns = Array.from(document.getElementsByClassName('portfolio__categories-item')),
  portfolioCardSwitch = document.getElementById('portfolio__cards-switch'),
  slideMenuIcon = document.getElementById('header__navslider-btn'),
  slideMenuCheckBox = document.getElementById('header__navslider-toggle'),
  slideMenuItems = document.getElementsByClassName('header__navslider-list__item');

container.addEventListener('click', function () {
  slideMenuCheckBox.checked = false;
})

Array.from(slideMenuItems, item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    slideMenuCheckBox.checked = false;
  });
});

slideMenuIcon.addEventListener('click', function (e) {
  e.preventDefault();
  slideMenuCheckBox.checked = true;
});

[aboutFlipBtns, reviewSlideBtns].forEach(arr => {
  arr.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.id !== arr[0].id ? arr[arr.length - 1].checked = true : arr[arr.length - 1].checked = false;
    });
  });
});

categoryBtns.forEach(b => {
  b.addEventListener('click', function (e) {
    e.preventDefault();
    if (b.id === 'all' && portfolioCardSwitch.checked) {
      return portfolioCardSwitch.checked = false;
    }
    if (b.id !== 'all' && !portfolioCardSwitch.checked) {
      portfolioCardSwitch.checked = true;
    }
    portfolioProjects.forEach(project => {
      if (project.dataset.category !== b.id && b.id !== 'all' && !project.classList.contains('portfolio__card-test')) {
        project.classList.add('portfolio__card-test');
      }
      if (project.dataset.category === b.id && b.id !== 'all' && project.classList.contains('portfolio__card-test')) {
        project.classList.remove('portfolio__card-test');
      }
    })
  })
});