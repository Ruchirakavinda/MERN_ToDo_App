import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todo.js'; 

const app = express();
dotenv.config();
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.use('/todo', todosRoutes)

const mongodb = 'mongodb+srv://ItemShop:item1234@cluster0.zuicn.mongodb.net/TodoDB?retryWrites=true&w=majority';
app.get('/',(req,res)=>{
    res.send('Welcome To Server..')
})

const PORT = process.env.PORT || 5000;
mongoose.connect(mongodb,{ useUnifiedTopology: true , useNewUrlParser: true }).then(()=> {
    console.log(`server is running on port ${PORT}`)
    app.listen(5000);

}).catch(err => console.log(err))