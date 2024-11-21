/*
  加载动画
  指令：v-loading

  1. 当前 binding.value 为 true 时，显示加载动画
  2. 当前 binding.value 为 false 时，隐藏加载动画
 */

import LoadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';

function getLoadingDom(el) {
  return el.querySelector('img[data-role="loading"]');
}

function createLoadingDom() {
  const img = document.createElement('img');
  img.dataset.role = 'loading';
  img.src = LoadingUrl;
  img.className = styles.loading;
  return img;
}

export default function (el, binding) {
  const curDom = getLoadingDom(el);
  if (binding.value) {
    if (!curDom) {
      const loading = createLoadingDom();
      el.appendChild(loading);
    }
  } else {
    if (curDom) {
      el.removeChild(curDom);
    }
  }
}
