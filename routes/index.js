var express = require('express');
var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/mosaic'
})

function getImages(){
  return knex('pictures')
}
function validator(url){
  var extension = url.substr(url.length - 3)

  if(extension === 'jpg' || extension === 'png' || extension === 'gif'){
    return true;
  }
  else{
    return false;
  }
}



/* GET home page. */
router.get('/', function(req, res, next) {
  getImages().select().then(function(result){



      res.render('index', {pictures: result})
  })
});



router.post('/', function(req, res, next){
  var image = req.body
  if(validator(image.image)=== true)
  getImages().insert(image).then(function(result){
    res.redirect('/')
  })
  else {
    res.redirect('/')
  }

});


router.get('/delete/:id', function(req, res, next){
  getImages().where('id', req.params.id).del().then(function(result){
    res.redirect('/')
  })
})



module.exports = router;
