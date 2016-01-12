var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/mosaic'
})

function getImages(){
  return knex('pictures')
}



/* GET home page. */
router.get('/', function(req, res, next) {
  getImages().select().then(function(result){



      res.render('index', {pictures: result})
  })
});



router.post('/', function(req, res, next){
  var image = req.body
  getImages().insert(image).then(function(result){
    res.redirect('/')
  })


});




module.exports = router;
