module.exports = function(sequelize , DataTypes){

const Course = sequelize.define('Course' , {

    courseName : {
        type: DataTypes.STRING,
        allowNull: false
    },

    courseDuration : {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseFees : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
return Course;
}
    

//Using Only Mysql

// const courseTable = "Use CourseManagementDB CREATE TABLE IF NOT EXISTS Courses (courseName VARCHAR(255) , courseDuration VARCHAR(255) , courseFess INTEGER(10))";

//   con.query(courseTable , function(err , result){
//     if(err) throw err;
//     console.log("Table Created");
// })

