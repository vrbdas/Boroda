function menu(menuHamburgerSelector, menuItemsSelector) {
  const menuHamburger = document.querySelector(menuHamburgerSelector);
  const menuItems = document.querySelector(menuItemsSelector);

  menuHamburger.addEventListener('click', () => {
    menuItems.classList.toggle('menu__items_active');
    menuHamburger.classList.toggle('menu__hamburger_active');
  });

  menuItems.addEventListener('transitionend', () => {
    BackgroundCheck.refresh(); // обновляет скрипт BackgroundCheck (см. документацию к BackgroundCheck)
  });
}

export default menu;