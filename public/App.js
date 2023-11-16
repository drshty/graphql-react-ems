"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var EmployeeSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(EmployeeSearch, _React$Component);
  var _super = _createSuper(EmployeeSearch);
  function EmployeeSearch() {
    _classCallCheck(this, EmployeeSearch);
    return _super.apply(this, arguments);
  }
  _createClass(EmployeeSearch, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is EmployeeSearch");
    }
  }]);
  return EmployeeSearch;
}(React.Component);
var EmployeeRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(EmployeeRow, _React$Component2);
  var _super2 = _createSuper(EmployeeRow);
  function EmployeeRow() {
    _classCallCheck(this, EmployeeRow);
    return _super2.apply(this, arguments);
  }
  _createClass(EmployeeRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "id"), /*#__PURE__*/React.createElement("td", null, "firstname"), /*#__PURE__*/React.createElement("td", null, "lastname"), /*#__PURE__*/React.createElement("td", null, "age"), /*#__PURE__*/React.createElement("td", null, "title"), /*#__PURE__*/React.createElement("td", null, "dob"));
    }
  }]);
  return EmployeeRow;
}(React.Component);
var EmployeeTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(EmployeeTable, _React$Component3);
  var _super3 = _createSuper(EmployeeTable);
  function EmployeeTable() {
    _classCallCheck(this, EmployeeTable);
    return _super3.apply(this, arguments);
  }
  _createClass(EmployeeTable, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date of Birth"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(EmployeeRow, null), /*#__PURE__*/React.createElement(EmployeeRow, null), /*#__PURE__*/React.createElement(EmployeeRow, null)));
    }
  }]);
  return EmployeeTable;
}(React.Component);
var EmployeeCreate = /*#__PURE__*/function (_React$Component4) {
  _inherits(EmployeeCreate, _React$Component4);
  var _super4 = _createSuper(EmployeeCreate);
  function EmployeeCreate() {
    _classCallCheck(this, EmployeeCreate);
    return _super4.apply(this, arguments);
  }
  _createClass(EmployeeCreate, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is EmployeeCreate");
    }
  }]);
  return EmployeeCreate;
}(React.Component);
var EmployeeDirectory = /*#__PURE__*/function (_React$Component5) {
  _inherits(EmployeeDirectory, _React$Component5);
  var _super5 = _createSuper(EmployeeDirectory);
  function EmployeeDirectory() {
    _classCallCheck(this, EmployeeDirectory);
    return _super5.apply(this, arguments);
  }
  _createClass(EmployeeDirectory, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management System"), /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeCreate, null));
    }
  }]);
  return EmployeeDirectory;
}(React.Component);
var element = /*#__PURE__*/React.createElement(EmployeeDirectory, null);
ReactDOM.render(element, document.getElementById('contents'));