import express from "express";
import {
  addTask,
  deleteTask,
  eidtTask,
  renderTask,
  taskEdit,
  toogleDone,
} from "../controllers/task.controllers";
const router = express.Router();

router.get("/", renderTask);

router.post("/task/add", addTask);

router.get("/edit/:id", taskEdit);

router.post("/edit/:id", eidtTask);

router.get("/delete/:id", deleteTask);

router.get("/toogleDone/:id", toogleDone);

export default router;
