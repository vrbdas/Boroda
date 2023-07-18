import {tns} from 'tiny-slider';
import {menu} from './modules/menu';
import {menuMobile} from './modules/menu';
import mining from './modules/mining';
import 'script-loader!./background-check.min.js';

window.addEventListener('DOMContentLoaded', () => {

  BackgroundCheck.refresh(); // обновляет скрипт BackgroundCheck при перезагрузке страницы (см. документацию к BackgroundCheck)

  // вкладки в секции mining

  mining();

  // меню навигации

  menu('.promo__menu-hamburger', '.promo__menu-items');
  menu('.mining__menu-hamburger', '.mining__menu-items');
  menuMobile('.mobile__hamburger', '.menu-mobile', '.menu-mobile__close', '.menu-mobile__item');

  // tiny slider

  const slider = tns({
    container: '.tns',
    items: 1,
    slideBy: 1,
    nav: true,
    loop: true,
    controls: true,
    prevButton: '.promo__controls-prev',
    nextButton: '.promo__controls-next',
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
  });

  // костыль для tns-слайдера, в котором нет функции счетчика слайдов. воспользовался навигационными точками(dots), включил их в настройках слайдера и скрыл с помощью css (.tns-nav) display: none;

  let slideCurrent = 1; // номер текущего слайда, в начале равен 1
  const slideBtns = document.querySelectorAll('.promo__controls-prev, .promo__controls-next'); // кнопки переключения слайдов
  const slideTotal = document.querySelectorAll('[data-nav]').length; // общее число слайдов, равно количеству нав. точек
  const slideCounter = document.querySelector('.promo__controls-counter'); // блок со счетчиком слайдов

  slideCounter.textContent = `${slideCurrent} / ${slideTotal}`; // выставляет начальное значение

  slideBtns.forEach((item) => { // при нажатии на кнопки обновляет номер текущего слайда
    item.addEventListener('click', () => {
      slideCurrent = +document.querySelector('.tns-nav-active').getAttribute('data-nav') + 1; // берет значение data-nav из активной точки, добавляет 1, потому что там счетчик идет от 0
      slideCounter.textContent = `${slideCurrent} / ${slideTotal}`;
    });
  });

  slider.events.on('transitionEnd', () => { // подписывается на событие окончания перелистывания слайда (см. документацию к tns)
    BackgroundCheck.refresh(); // обновляет скрипт BackgroundCheck (см. документацию к BackgroundCheck)
  });

  // BackgroundCheck

  BackgroundCheck.init({
    targets: '.promo__controls-counter, .promo__controls-prev, .promo__controls-next, .menu__item, .menu__hamburger, .mobile__hamburger, .promo__breadcrumbs-link, .divider-mobile, .promo__title'
  });
  BackgroundCheck.set('threshold', 80);

});
