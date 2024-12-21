"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlogTypes = getBlogTypes;
exports.getBlogs = getBlogs;
exports.getBlog = getBlog;
exports.postComment = postComment;
exports.getComments = getComments;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getBlogTypes() {
  return regeneratorRuntime.async(function getBlogTypes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/blogtype'));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * 获取博客文章列表
 * @param {number} page - 页码，默认为 1
 * @param {number} limit - 每页显示的文章数量，默认为 10
 * @param {number} categoryId - 分类 ID，默认为 -1，表示获取所有分类的文章
 * @returns {Promise} - 返回一个 Promise，解析为包含文章列表的响应数据
 */


function getBlogs() {
  var page,
      limit,
      categoryId,
      _args2 = arguments;
  return regeneratorRuntime.async(function getBlogs$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
          limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 10;
          categoryId = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : -1;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_request["default"].get('/api/blog', {
            params: {
              page: page,
              limit: limit,
              categoryId: categoryId
            }
          }));

        case 5:
          return _context2.abrupt("return", _context2.sent);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getBlog(blogId) {
  return regeneratorRuntime.async(function getBlog$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get("/api/blog/".concat(blogId)));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function postComment(commentInfo) {
  return regeneratorRuntime.async(function postComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_request["default"].post('/api/comment', commentInfo));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function getComments(blogid) {
  var page,
      limit,
      _args5 = arguments;
  return regeneratorRuntime.async(function getComments$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          page = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 1;
          limit = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 10;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_request["default"].get("/api/comment", {
            params: {
              blogid: blogid,
              page: page,
              limit: limit
            }
          }));

        case 4:
          return _context5.abrupt("return", _context5.sent);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}