const express = require('express')
const db = require('../database/index');
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('../routes');
const http = require('http');
// const session = require('express-session');
// const passport = require('passport');
// const index = require('../routes/index');
// const users = require('../routes/users');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.session({secret: 'thesecret'}))
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
// app.use(session({
//     secret:'thesecret',
//     saveUninitialized:false,
//     resave:false,
// }));

// app.use('/', index);
// app.use('/users', users);

app.get('/', routes.index)

app.listen(port, () => console.log(`Our app listening on port ${port}!`))
