function menu() {
  const menuHamburger = document.querySelector('.menu__hamburger');
  const menuItems = document.querySelector('.menu__items');

  menuHamburger.addEventListener('click', () => {
    menuItems.classList.toggle('menu__items_active');
    menuHamburger.classList.toggle('menu__hamburger_active');
  });

  menuItems.addEventListener('transitionend', () => {
    BackgroundCheck.refresh(); // обновляет скрипт BackgroundCheck (см. документацию к BackgroundCheck)
  });
}

export default menu;