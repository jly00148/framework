"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = _interopRequireDefault(require("./state"));

var _getters = _interopRequireDefault(require("./getters"));

var _actions = _interopRequireDefault(require("./actions"));

var _mutations = _interopRequireDefault(require("./mutations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//1.引入
//现在注销，整个应用store会引入
// import Vue from 'vue';
// import Vuex from 'vuex';
//2.安装
//现在注销，整个应用store会引入
// Vue.use(Vuex)
//4.导出,在main.js中配制接收
var _default = {
  state: _state["default"],
  getters: _getters["default"],
  //vuex的计算属性
  actions: _actions["default"],
  mutations: _mutations["default"]
};
exports["default"] = _default;