const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' }
];

app.get('/', (req, res) => {
    res.send(courses);
});


app.get('/api/courses/:year/:month', (req, res) => {
    //req.query => use for search
    res.send(req.params);
});

//find system
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('the course was not found');
    }
    else {
        res.send(course);
    }
});

//global valid function
function validCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

//Post
app.post('/api/courses', (req, res) => {

    const { error } = validCourse(req.body);
    // console.log(result);

    if(error) {
        res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//put
app.put('/api/courses/:id', (req, res) => {
    //look up the course
    const course = courses.find( c => c.id === parseInt(req.params.id));
    
    //if not exiting, return 404
    if(!course) {
        res.status(404).send("not found");
    }


    //validate
    const { error } = validCourse(req.body);

    //if invalid, return 400-- bad request
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    //update course
    course.name = req.body.name;

    //return the updated course
    res.send(course);
});

//delete
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("not found the course id");
        return;
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenig on ${port}`));