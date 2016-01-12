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
      console.log('**************');
      console.log(result);

      res.render('index', {pictures: result})
  })



});

module.exports = router;
