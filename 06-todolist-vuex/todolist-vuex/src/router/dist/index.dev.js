"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("../pages/home/index"));

var _index2 = _interopRequireDefault(require("../pages/todolist/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//1 注册VueRouter
_vue["default"].use(_vueRouter["default"]); //2 引入组件


//3 定义路由
var routes = [{
  path: '/home',
  component: _index["default"]
}, {
  path: '/todolist',
  component: _index2["default"]
}]; //4 根据路由创建router实例

var router = new _vueRouter["default"]({
  mode: 'history',
  //仅添加属性即可为h5路由
  routes: routes
}); //导出路由

var _default = router;
exports["default"] = _default;