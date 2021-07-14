import express  from "express";
import { createTodos, readTodos } from "../controller/todo.js";

const router = express.Router();
router.get('/', readTodos);
router.post('/', createTodos);
export default router;
