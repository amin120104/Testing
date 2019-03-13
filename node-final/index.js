const { TodoModel } = require('./server.js');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const todos = [
    {
        todo: 'Learn mongodb'
    },
    {
        todo: 'Learn React js'
    },
    {
        todo: 'Study on node.js'
    }
]

app.get('/', async (req, res) => {
    const todosfromdb = await TodoModel.find();
    res.status(200).send(todosfromdb);
})

app.listen(port, () => console.log(`App are Listening on ${port} ...`));