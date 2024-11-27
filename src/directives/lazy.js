import defaultImgUrl from '@/assets/default.gif';
import { debounce } from '@/utils';
import eventBus from '../eventBus';

const imgs = new Set();

function setImgs() {
  for (const img of imgs) {
    const { img: dom, src } = img;
    const rect = dom.getBoundingClientRect();
    if (rect.top >= -rect.height && rect.top <= window.innerHeight) {
      const tempImg = new Image();
      tempImg.src = src;
      tempImg.onload = function () {
        dom.src = src;
        imgs.delete(img);
      };
    }
  }
}

setImgs = debounce(setImgs, 50);
eventBus.$on('mainScroll', setImgs);

export default {
  bind(el, binding) {
    imgs.add({
      img: el,
      src: binding.value || defaultImgUrl,
    });
    el.src = defaultImgUrl;
    setImgs();
  },
  unbind(el, binding) {
    imgs.delete({
      img: el,
      src: binding.value || defaultImgUrl,
    });
  },
};
