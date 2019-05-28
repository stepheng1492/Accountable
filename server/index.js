const express = require('express');
const app = express();
const db = require('../database/index')


const port = 3000;

app.listen(port, () => {
    console.log('listening on port 3000!');
});