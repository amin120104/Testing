const { TodoModel, createTodo } = require('./server.js');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

//get todos from db using model and async 
app.get('/', async (req, res) => {
    const todosfromdb = await TodoModel.find();
    res.status(200).send(todosfromdb);
})

//post todo and save it on database using model and method
app.post('/addtodo', (req, res) => {
    createTodo(req.body.todo, true);
    res.status(201).send("successfull");
    
})

app.listen(port, () => console.log(`App are Listening on ${port} ...`));