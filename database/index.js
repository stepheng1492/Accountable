// sequalize
// connect to database
// exprt connection

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = new Sequelize('accountable', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection to database successful');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const Teachers = sequelize.define('teacher', {
    // name 
    // classes 
    // school 
    name: {
        type: Sequelize.STRING,
    },
    classes: {
        type: Sequelize.JSON,
    },
    school: {
        type: Sequelize.STRING,
    },
    username: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
});

// Teachers.methods.hashPassword = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }

// Teachers.methods.comparePassword = function(password, hash) {
//     return bcrypt.compareSync(password, hash);
// }

const Classes = sequelize.define('class', {
    // name, students 
    name: {
        type: Sequelize.STRING,
    },
    students: {
        type: Sequelize.JSON,
    },
});

const Students = sequelize.define('student', {
    //name, parentname, phone, email comments
    name: {
        type: Sequelize.STRING,
    },
    parentName: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    comments: {
        type: Sequelize.JSON,
    },
});

// one student has many comments

const Comments = sequelize.define('comment', {
    studentID: {
        type: Sequelize.INTEGER,
        references: {model: 'students', key: 'id'}
    },
    comment: {
        type: Sequelize.TEXT,
    },
    date: {
        type: Sequelize.DATE,
    },
});


Teachers.sync();
Classes.sync();
Students.sync();
Comments.sync();


module.exports.models = {
    Teachers,
    Classes,
    Students,
    Comments
}