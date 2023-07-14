import {tns} from 'tiny-slider';

const slider = tns({
  container: '.licence__tns',
  items: 1,
  slideBy: 1,
  autoplay: false,
  nav: false,
  loop: false,
  prevButton: '.licence__slider-prev',
  nextButton: '.licence__slider-next',
  responsive: {
    768: {
      items: 1
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    },
  }
});

