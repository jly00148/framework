"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _type = require("./type");

var _LOADITEM$addItem$del;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_LOADITEM$addItem$del = {}, _defineProperty(_LOADITEM$addItem$del, _type.LOADITEM, function (state, payload) {
  //state是state.js中的数据，payload是commit方法第二个参数
  this.state.list = payload;
}), _defineProperty(_LOADITEM$addItem$del, "addItem", function addItem(state, payload) {
  this.state.list.push(payload);
}), _defineProperty(_LOADITEM$addItem$del, "delItem", function delItem(state, payload) {
  var list = this.state.list.filter(function (item) {
    return item.id != payload;
  });
  this.state.list = list;
}), _LOADITEM$addItem$del);

exports["default"] = _default;