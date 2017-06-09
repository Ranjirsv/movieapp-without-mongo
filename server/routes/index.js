var express = require('express');
var router = express.Router();
const request=require('request');
 
/* GET home page. */
router.get('/', function(req, res, next) {
   
  res.render('index', { title: 'Express' });
});
router.get('/search',function(req,res){
 console.log(req.query.name);
    request.get('https://api.themoviedb.org/3/search/movie?api_key=3d34e72c9badeb4e4254c09ec0109d8e&language=en-US&query='+req.query.name+'&page=1&include_adult=false',function(err,response,body){
   console.log(!err);
   console.log(response.statusCode);
   if(!err && response.statusCode === 200){
       
        res.send(response.body);
        
    }  else{
        res.send('error occured in route');
    }  
    });
});
module.exports = router;
