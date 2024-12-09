"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("@/styles/global.less");

var _router = _interopRequireDefault(require("@/router"));

var _store = _interopRequireDefault(require("@/store"));

var _utils = require("@/utils");

var _loading = _interopRequireDefault(require("@/directives/loading"));

var _lazy = _interopRequireDefault(require("@/directives/lazy"));

require("./eventBus");

require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './mock';
// 在 Vue 实例中添加全局消息弹窗方法
_vue["default"].prototype.$showMessage = _utils.showMessage; // 注册全局指令 v-loading，v-lazy

_vue["default"].directive('loading', _loading["default"]);

_vue["default"].directive('lazy', _lazy["default"]);

_store["default"].dispatch('setting/getSetting');

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"]
}).$mount('#app');

require('./test.js');