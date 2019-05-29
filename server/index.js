const express = require('express')
const db = require('../database/index')
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(path.join(__dirname, '../client/dist')));


// post request handler for adding classes
app.post('/classes', (req, res) => {
    // save classes to database
    // on req.body there is class name
    db.models.Classes.create({
        name: req.body.className,
        students: '[]',
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
        comments: '[]',
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
        date: new Date(),
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



app.listen(port, () => console.log(`Our app listening on port ${port}!`))
