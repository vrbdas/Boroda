import {tns} from 'tiny-slider';
import menu from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {

  const slider = tns({
    container: '.tns',
    items: 1,
    slideBy: 1,
    autoplay: false,
    nav: true,
    loop: true,
    controls: true,
    prevButton: '.promo__controls-prev',
    nextButton: '.promo__controls-next',
    responsive: {
      768: {

      },
      992: {

      },
      1200: {

      },
    }
  });

  menu(); // меню навигации

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

  // вкладки в секции mining

  const miningItems = document.querySelectorAll('.mining__item');
  function miningItemsRemoveActiveClasses() {
    miningItems.forEach((item) => {
      item.classList.remove('mining__item_active');
    });
  }
  miningItems.forEach((item) => {
    item.addEventListener('click', () => {
      miningItemsRemoveActiveClasses();
      item.classList.add('mining__item_active');
    });
  });

});
