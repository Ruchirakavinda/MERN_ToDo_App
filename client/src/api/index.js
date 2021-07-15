import axios from 'axios';
const url = "http://localhost:5000/todo";
export const readTodos = () => axios.get(url);
export const createTodos = newTodo => axios.post(url,newTodo);
export const updateTodos= (id, updateTodo)=>axios.patch(`${url}/${id}`,updateTodo);
