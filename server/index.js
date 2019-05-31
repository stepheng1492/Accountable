const express = require('express')
const db = require('../database/index')
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser')

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));


// post request handler for adding classes
app.post('/classes', (req, res) => {
    // save classes to database
    // on req.body there is class name
    db.models.Classes.create({
        name: req.body.className,
        teacherID: req.body.id,
    })
    .then(() => {
        console.log('class saved in database successfully');
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Error saving new class to database', err);
        res.sendStatus(500);
    })
});

app.post('/students', (req, res) => {
    db.models.Students.create({
        name: req.body.name,
        parentName: req.body.parentName,
        phone: req.body.phone,
        email: req.body.email,
        classID: req.body.classID
    })
    .then(() => {
        console.log('Student data saved in database successfully');
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error('error saving student data in database', err);
        res.sendStatus(500);
    })
});

app.post('/comments', (req, res) => {
    db.models.Comments.create({
        studentID: req.body.studentID,
        comment: req.body.comment,
    })
    .then(() => {
        console.log('comment data successfully saved in database');
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error('error saving comment data in database', err);
        res.sendStatus(500);
    })
});

app.get('/students', (req, res) => {
    // take class name from query body, associate with id, then get the student info
    // eveyrthing with that class ID
    // send it back to the client
    db.models.Students.findAll({
        where: {
            classID: req.query.classID,
        }
    })
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log('error querying database for students', err);
        res.sendStatus(500);
    })
});

// get request for classes

app.get('/classes', (req, res) => {
    db.models.Classes.findAll({
        where: {
            // when teacher logs in, all classes associated with their ID show up on page
            teacherID: req.query.teacherID,
        }
    })
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log('error querying database for classes', err);
        res.sendStatus(500);
    })
});

// comments get req -- when teacher clicks on student history

app.get('/comments', (req, res) => {
    db.models.Comments.findAll({
        where: {
            studentID: req.query.studentID,
        }
    })
    .then((response) => {
        res.send(response);
    })
    .catch(() => {
        console.log('error querying database for comments', err);
        res.sendStatus(500);
    })
})


// get handler for teachers -- this will have to be called on successful log in

app.get('/teachers', (req, res) => {
    // right now, query database and send back the test teacher
    db.models.Teachers.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log('error getting from /teachers', err);
    })
})

// post handler for login -- adding teacher email and name for each teacher to db

app.post('/login', (req, res) => {
    console.log(req.body);
    db.models.Teachers.destroy({
        where: {
            email: req.body.email,
        }
    })
    db.models.Teachers.create({
        name: req.body.name,
        email: req.body.email,
    })
    .then(() => {
        console.log('Teacher information successfully saved in the database')
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error saving teacher info to database', err);
        res.sendStatus(500);
    })
})

app.listen(port, () => console.log(`Our app listening on port ${port}!`))
