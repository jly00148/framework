"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./router/index"));

var _index2 = _interopRequireDefault(require("./store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 此文件是项目入口文件
// router实例
//关闭生产环境模式更改提示
_vue["default"].config.productionTip = false; ///引入store

//实例挂载到根组件上，$mount：实例上的$mount方法,d等价以下方法,根组件App挂载到组件#app2上
new _vue["default"]({
  router: _index["default"],
  ///配制router
  store: _index2["default"],
  //配制store,为了所有组件都能拿到数据
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app2'); // new Vue({
//   el:'#app',
//   render: h => h(App)
// })