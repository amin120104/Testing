const express = require('express');
const app = express();

app.use(express.json());

const products = [
        {
            id: 1,
            productName: 'men tshirt'
        },
        {
            id: 2,
            productName: 'men shirt'
        },
        {
            id: 3,
            productName: 'women'
        }
    ]

//Normal hello word pass
app.get('/', (req, res) => {
    res.send('hello world');
})

//Object value pass
app.get('/products', (req, res) => {
    res.send(products);
})

//value pass dynamicly with id
app.get('/product/:id', (req, res) => {
    res.send(req.params.id);
})

//multiple value pass
app.get('/posts/:month/:date', (req, res) => {
    res.send(req.params);
})

//value from query
app.get('/post/:month/:date', (req, res) => {
    res.send(req.query);
})

//query value from my given varible
app.get('/singleproduct/:id', (req, res) => {
    const productvalue = products.find(c => c.id === parseInt(req.params.id));
    if(!productvalue) res.status(404).send('search id is not found in the product list');
    res.send(productvalue);
})

//add new prodct item
app.post('/products', (req, res) => {
    const product = {
        id: products.length + 1,
        productName: req.body.name
    }
    products.push(product);
    res.send(product);
})

//I am skipping using of joi for validation

app.put()

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


