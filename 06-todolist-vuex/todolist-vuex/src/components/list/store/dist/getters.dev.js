"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  total: function total(state) {
    //这个state是当前当前模块的state
    return state.list.length;
  }
};
exports["default"] = _default;