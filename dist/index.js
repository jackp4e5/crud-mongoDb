"use strict";

var _app = _interopRequireDefault(require("./app"));
var _database = _interopRequireDefault(require("./database"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _database["default"])();
var PORT = 3000 || process.env.PORT;
_app["default"].listen(PORT);
console.log("servidor escuchando en el puerto", 3000);