var express = require('express');

var router = express.Router();
var movieService = require('../services/movieDBServices');

// var movieList =[
//     {id:1,name:"DON",year:2019,image_url:"bookmyshow.com",production_house:"Dharma production",rating:5,type:"Action",language:"hindi",date:'12-02-2019'},
//     {id:1,name:"KG3",year:2019,image_url:"bookmyshow.com",production_house:"Dharma production",rating:5,type:"Action",language:"hindi",date:'12-02-2019'},
// ]


// router.get('/', function (req, res, next) {
// 	res.send(movieList);
// });

router.get('/', function(req, res, next) {
    var callback = function(movieList){
      res.send(movieList);
    }
    movieService.getMovies(callback);
  });

router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  movieService.deleteMovies(movieId,callback);
});


  router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    var movie = req.body;
    movieService.addMovies(movie, callback);
  });



// router.get('/:id', function (req, res, next) {
// 	res.send(movieList);
// });

module.exports = router;