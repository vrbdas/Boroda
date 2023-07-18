function menu(menuTriggerSelector, menuBlockSelector) {
  const menuTrigger = document.querySelector(menuTriggerSelector);
  const menuBlock = document.querySelector(menuBlockSelector);

  menuTrigger.addEventListener('click', () => {
    menuBlock.classList.toggle('active');
    menuTrigger.classList.toggle('active');
  });

  menuBlock.addEventListener('transitionend', () => {
    BackgroundCheck.refresh(); // обновляет скрипт BackgroundCheck (см. документацию к BackgroundCheck)
  });
}

function menuMobile(menuTriggerSelector, menuBlockSelector, menuCloseSelector, menuLinksSelector) {
  const menuTrigger = document.querySelectorAll(menuTriggerSelector);
  const menuBlock = document.querySelector(menuBlockSelector);
  const menuClose = document.querySelector(menuCloseSelector);
  const menuLinks = document.querySelectorAll(menuLinksSelector);

  menuTrigger.forEach((item) => {
    item.addEventListener('click', () => {
      menuBlock.classList.add('active');
      item.classList.add('active');
      document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы
    });
  });

  // menuTrigger.addEventListener('click', () => {
  //   menuBlock.classList.add('active');
  //   menuTrigger.classList.add('active');
  //   document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы
  // });

  menuClose.addEventListener('click', () => {
    menuHide();
  });

  menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
      menuHide();
    });
  });

  menuBlock.addEventListener('transitionend', () => {
    BackgroundCheck.refresh(); // обновляет скрипт BackgroundCheck (см. документацию к BackgroundCheck)
  });

  function menuHide() {
    menuBlock.classList.remove('active');
    menuTrigger.forEach((item) => {
      item.classList.remove('active');
    });
    document.body.style.overflow = ''; // Возвращает прокрутку страницы
  }
}

export {menu};
export {menuMobile};