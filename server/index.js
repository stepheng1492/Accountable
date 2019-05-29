const express = require('express')
const port = 3000;
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '../client/dist')));




app.listen(port, () => console.log(`Our app listening on port ${port}!`))
