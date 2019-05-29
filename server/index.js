const express = require('express')
const port = 3000;
const path = require('path');
const db = require('../database/index')
const app = express();


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/teachers', (req, res) => {
    console.log(req);
})


app.listen(port, () => console.log(`Our app listening on port ${port}!`))
