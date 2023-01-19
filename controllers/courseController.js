const db = require('../models')

// create main Model
const Course = db.courses;
// Add Couse 

const addCourse = async (req , res) =>{
 
     console.log(req.body);

    let courseInfo = {
        courseName : req.body.courseName,
        courseDuration : req.body.courseDuration,
        courseFees : req.body.courseFees
    }
    const course = await Course.create(courseInfo);
    console.log(course);

    res.render('courses',{course: course});
    // res.status(200).send(course);
}

// get all courses

const getAllCourse = async (req, res) =>{
    let course = await Course.findAll({})
    //  res.status(200).send(course);
    // res.status(200).send({course: course});
    res.render('courses',{course: course});
}

// get single course

const getOneCourse = async (req, res) =>{
    let id = req.params.id;
    let course = await Course.findOne({where : {id: id}});
    res.status(200).send(course);
}

// update Course

const updateCourse = async (req, res) =>{
    let id = req.params.id;
    console.log(req.body);
    console.log(id);
    
    const course = await Course.update(req.body , {where : { id:id}})
    res.render('courses',{course: course});
    // res.status(200).send(course)
}   

// delete course by id

const deleteCourse = async (req , res) =>{
    let id = req.params.id;
 

    await Course.destroy({where : {id: id}})
         res.status(200).send('Course is Deleted');

}

module.exports = {
    addCourse,
    getAllCourse,
    getOneCourse,
    updateCourse,
    deleteCourse
}

// module.exports = function(app){

//     app.get('/', function(req , res){
//         if(err) throw err;
//         res.send(data);
//     });
// };  
