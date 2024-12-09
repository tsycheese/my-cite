"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(require("@/assets/default.gif"));

var _utils = require("@/utils");

var _eventBus = _interopRequireDefault(require("../eventBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var imgs = new Set();

function setImgs() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var img = _step.value;
      var dom = img.img,
          src = img.src;
      var rect = dom.getBoundingClientRect();

      if (rect.top >= -rect.height && rect.top <= window.innerHeight) {
        var tempImg = new Image();
        tempImg.src = src;

        tempImg.onload = function () {
          dom.src = src;
          imgs["delete"](img);
        };
      }
    };

    for (var _iterator = imgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

setImgs = (0, _utils.debounce)(setImgs, 50);

_eventBus["default"].$on('mainScroll', setImgs);

var _default = {
  bind: function bind(el, binding) {
    imgs.add({
      img: el,
      src: binding.value || _default2["default"]
    });
    el.src = _default2["default"];
    setImgs();
  },
  unbind: function unbind(el, binding) {
    imgs["delete"]({
      img: el,
      src: binding.value || _default2["default"]
    });
  }
};
exports["default"] = _default;