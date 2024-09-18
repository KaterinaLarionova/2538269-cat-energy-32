/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.site-list');
const navToggle = document.querySelector('.main-nav__toggle--closed');

navMain.classList.remove('site-list--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-nav__toggle--open')) {
    navMain.classList.add('site-list--closed');
    navToggle.classList.remove('main-nav__toggle--open');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    navMain.classList.add('site-list--open');
    navMain.classList.remove('site-list--closed');
    navToggle.classList.add('main-nav__toggle--open');
    navToggle.classList.remove('main-nav__toggle--closed');
  }
});
