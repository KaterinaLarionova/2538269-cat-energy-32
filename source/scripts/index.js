/* в этот файл добавляет скрипты*/
console.log('Ghbdtn');
let navMain = document.querySelector('.site-list');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header__toggle')) {
    navMain.classList.remove('main-nav__list');
    navMain.classList.add('main-nav__list--closed');
    navToggle.classList.remove('main-header__toggle');
    navToggle.classList.add('main-header__toggle--closed');
  } else {
    navMain.classList.add('main-nav__list');
    navMain.classList.remove('main-nav__list--closed');
    navToggle.classList.add('main-header__toggle');
    navToggle.classList.remove('main-header__toggle--closed');
  }
});

