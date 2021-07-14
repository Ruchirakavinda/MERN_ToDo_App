import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const todoschema = new Schema({
    title: {
        type : String,
        required : true
    },
    content : String

}, { timestamps:true });

const Todo = mongoose.model('Todo',todoschema)
export default Todo;
