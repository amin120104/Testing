const { ProductModel, addProduct } = require('./server.js');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

//get todos from db using model and async 
app.get('/', async (req, res) => {
    const todosfromdb = await ProductModel.find();
    res.status(200).send(todosfromdb);
})

//post todo and save it on database using model and method
app.post('/addproduct', (req, res) => {
    addProduct(req.body.name, req.body.price, req.body.category, true);
    res.status(201).send("successfull"); 
})

app.listen(port, () => console.log(`App are Listening on ${port} ...`));