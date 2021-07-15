import express  from "express";
import { createTodos, readTodos, updateTodo } from "../controller/todo.js";

const router = express.Router();
router.get('/', readTodos);
router.post('/', createTodos);
router.patch('/:id', updateTodo);
export default router;
