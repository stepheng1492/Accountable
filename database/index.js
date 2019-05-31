require('dotenv').config();

const { MASTER_USERNAME,
        DB_NAME,
        DB_PASSWORD,
        DB_PORT,
        DB_URI
    } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_NAME, MASTER_USERNAME, DB_PASSWORD, {
    host: DB_URI,
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

Comments.sync()
.then(() => {
    return Classes.sync();
})
.then(() => {
    return Students.sync()
})
.then(() => {
    return Teachers.sync()
       
})
.catch((err) => {
    console.error(err);
})





module.exports.models = {
    Teachers,
    Classes,
    Students,
    Comments
}