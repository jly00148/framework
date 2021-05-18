"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _type = require("./type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _defineProperty({}, _type.LOADITEM, function _callee(_ref) {
  var commit, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          commit = _ref.commit;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get('http://127.0.0.1:3000'));

        case 3:
          result = _context.sent;
          commit('loadItem', result.data); //第一个参数是type类型，第二个是payload,commit之后走到mutation,通过mutation改变数据

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});

exports["default"] = _default;