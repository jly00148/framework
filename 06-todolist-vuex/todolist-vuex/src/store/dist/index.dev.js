"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _index = _interopRequireDefault(require("../components/list/store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//1.引入
_vue["default"].use(_vuex["default"]); //3.生成store实例，注意，整个应用只有一个store实例


var store = new _vuex["default"].Store({
  modules: {
    todolist: _index["default"] //命名空间

  }
}); //4.导出,在main.js中配制接收

var _default = store;
exports["default"] = _default;