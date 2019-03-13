const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost/todos', {useNewUrlParser: true})
    .then(() => console.log('Connected to Mongodb'))
    .catch(err => console.log('Db connection error', err));

//todos schema
const todoschema = new mongoose.Schema({
    todo: String,
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

//todos model===This is Most important (always need it for get, put , delete, update)
const TodoModel = mongoose.model('TodoModel', todoschema);

//data insert
async function createTodo(fisrt, second) {
    const todo = new TodoModel({
        todo: fisrt,
        isPublished: second
    });
    
    const result = await todo.save();
    // console.log(result);
}
// createTodo();

// async function getTodos() {
//     const todos = await TodoModel.find();
//     return todos;
// }
// getTodos();

exports.TodoModel = TodoModel;

exports.createTodo = createTodo;
