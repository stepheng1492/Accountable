// sequalize
// connect to database
// exprt connection

const Sequelize = require('sequelize');
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
});

const Classes = sequelize.define('class', {
    // name, students 
    name: {
        type: Sequelize.STRING,
    },
    students: {
        type: Sequelize.JSON,
    },
    teacherID: {
        type: Sequelize.INTEGER,
        references: { model: 'teachers', key: 'id' }
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
    classID: {
        type: Sequelize.INTEGER,
        references: {model: 'classes', key: 'id'}
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