import express from "express";
import { TodoController } from "../controller/todosController.js";

const router = express.Router();

router.get("/todos", TodoController.getAllTodos);
router.get("/todo/:id", TodoController.getTodoById);
router.post("/todo", TodoController.createTodo);
router.put("/todo/:id", TodoController.updateTodo);
router.delete("/todo/:id", TodoController.deleteTodo);

export default router;