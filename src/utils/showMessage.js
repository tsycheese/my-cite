import styles from '@/styles/message.module.less';
import Icon from '@/components/Icon';
import getComponentRootDom from './getComponentRootDom';

/**
 * 全局消息提示
 * @param {Object} options 消息配置
 * @param {String} options.content 消息内容
 * @param {String} options.type 消息类型：info, error, warn, success
 * @param {Number} options.duration 消息多久后消失
 * @param {HTMLElement} options.container 消息的父容器
 * @param {Function} options.callback 消息消失后的回调
 */
export default function (options) {
  const content = options.content;
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const container = options.container || document.body;

  // 创建一个消息元素，加入到容器中
  const div = document.createElement('div');
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  const typeClass = styles[`message-${type}`];
  div.classList.add(styles.message);
  div.classList.add(typeClass);
  div.innerHTML = `
    <div class="${styles.icon}">
      ${iconDom.outerHTML}
    </div>
    <div class="${styles.content}">
      ${content}
    </div>
  `;
  if (!container.style.position || container.style.position === 'static') {
    container.style.position = 'relative';
  }
  container.appendChild(div);

  // 强制浏览器渲染，避免动画不生效
  div.offsetHeight;
  // 改变样式，实现动画
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%) translateY(0)`;
  // 等动画结束后，移除自己
  div.addEventListener('transitionend', function () {
    setTimeout(() => {
      div.style.opacity = 0;
      div.style.transform = `translate(-50%, -50%) translateY(-50px)`;
      div.addEventListener('transitionend', function () {
        div.remove();
        options.callback && options.callback();
      });
    }, duration);
  });
}
