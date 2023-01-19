const express = require('express');
const app = express();
// middleware
app.use(express.urlencoded({extended : false}))
app.use(express.json());
app.set('view engine' , 'ejs');

//static files
app.use(express.static('./public'));

// Default Router 
const router = require('./routes/courseRoute');
app.use('/api/courses' , router);

// server
const server = process.env.PORT || 3000;
app.listen(5000 , () => {
    console.log('Server is started...' + server);
  });