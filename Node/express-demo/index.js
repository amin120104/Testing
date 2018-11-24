const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' }
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

//Post
app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    // console.log(result);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//put
app.put('/api/courser/:id', (req, res) => {
    //look up the course
    const course = courses.find( c => c.id === parseInt(req.params.id));
    
    //if not exiting, return 404
    if(!course) {
        res.status(404).send("not found");
    }


    //validate
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);

    //if invalid, return 400-- bad request
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    //update course
    course.name = req.body.name;

    //return the updated course
    res.send(course);
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenig on ${port}`));