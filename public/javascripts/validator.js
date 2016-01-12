
module.exports = {

  validate: function(url){
    var extension = url.substr(url.length - 3)

    if(extension === 'jpg' || extension === 'png' || extension === 'gif'){
      return true;
    }
    else{
      return false;
    }
  }



}
