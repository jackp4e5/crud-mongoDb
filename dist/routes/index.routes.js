"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _task = require("../controllers/task.controllers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/", _task.renderTask);
router.post("/task/add", _task.addTask);
router.get("/edit/:id", _task.taskEdit);
router.post("/edit/:id", _task.eidtTask);
router.get("/delete/:id", _task.deleteTask);
router.get("/toogleDone/:id", _task.toogleDone);
var _default = router;
exports["default"] = _default;