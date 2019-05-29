const express = require('express')
const db = require('../database/index')
const port = 3000;
const path = require('path');

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
    .catch(() => {
        console.log('Error saving new class to database', err);
        res.sendStatus(500);
    })
})

app.listen(port, () => console.log(`Our app listening on port ${port}!`))
