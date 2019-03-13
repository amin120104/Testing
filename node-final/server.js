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

//todos model
const TodoModel = mongoose.model('TodoModel', todoschema);

//data insert
async function createTodo() {
    const todo = new TodoModel({
        todo: 'Learn Node.js',
        isPublished: true
    });
    
    const result = await todo.save();
    console.log(result);
}
// createTodo();

async function getTodos() {
    const todos = await TodoModel.find();
    return todos;
}
getTodos();

exports.TodoModel = TodoModel;
