module.exports = {
    HOST :  'localhost',
    USER : 'root',
    PASSWORD: 'Parimal132',
    DB : 'CourseManagementDB',
    dialect : 'mysql',

    // Connection information
    pool : {
       max: 5,
       min: 0,
       acquire : 30000,
       idel: 10000
    }
}