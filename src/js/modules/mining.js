function mining() {

  const miningItems = document.querySelectorAll('.mining__item');

  // меняет классы по кругу с интервалом 6с

  let i = 0;
  const timerId = setInterval(function() {
    if (i == miningItems.length) {
      i = 0;
    } else {
      miningItemsRemoveActive();
      miningItems[i].classList.add('mining__item_active');
      i++;
    }
  }, 6000);

  // меняет классы по клику

  miningItems.forEach((item) => {
    item.addEventListener('click', () => {
      miningItemsRemoveActive();
      item.classList.add('mining__item_active');
      clearInterval(timerId); // после клика автопереключение останавливается
    });
  });

  function miningItemsRemoveActive() {
    miningItems.forEach((item) => {
      item.classList.remove('mining__item_active');
    });
  }

}

export default mining;