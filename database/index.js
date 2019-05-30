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
});

const Classes = sequelize.define('class', {
    // name, students 
    name: {
        type: Sequelize.STRING,
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


Teachers.sync()
    .then(() => {
        Teachers.destroy({
            where: {
                name: 'test',
            }
        })
        .then(() => {
            Teachers.create({
                name: 'test',
            });
        })
    });
Classes.sync();
Students.sync();
Comments.sync();


// adding 'test' teacher to database
// remove when going live
// Teachers.destroy({
//     where: {
//         name: 'test',
//     }
// });
// Teachers.create({
//     name: 'test',
// });


module.exports.models = {
    Teachers,
    Classes,
    Students,
    Comments
}