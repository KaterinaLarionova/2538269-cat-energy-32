/* в этот файл добавляет скрипты*/
console.log('Ghbdtn');
let navMain = document.querySelector('.site-list');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__list--closed')) {
    navMain.classList.remove('main-nav__list--closed');
    navMain.classList.add('main-nav__list');
  } else {
    navMain.classList.add('main-nav__list--closed');
    navMain.classList.remove('main-nav__list');
  }
});

