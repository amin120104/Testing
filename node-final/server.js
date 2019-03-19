const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true})
    .then(() => console.log('Connected to Mongodb'))
    .catch(err => console.log('Db connection error', err));

//todos schema
const productschema = new mongoose.Schema({
    pname: String,
    pprice: Number,
    Pcategory: String,
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

//todos model===This is Most important (always need it for get, put , delete, update)
const ProductModel = mongoose.model('ProductModel', productschema);

//data insert
async function addProduct(fisrt, second, third, fourth) {
    const todo = new ProductModel({
        pname: fisrt,
        pprice: second,
        Pcategory: third,
        isPublished: fourth
    });
    
    const result = await todo.save();
    // console.log(result);
}
// addProduct();

// async function getTodos() {
//     const todos = await TodoModel.find();
//     return todos;
// }
// getTodos();

exports.ProductModel = ProductModel;

exports.addProduct = addProduct;
