var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signin',function(req,res){
  var name = req.body.name;
  var pass = req.body.password;
  
  if(name == 'admin' && pass == '123456'){
      req.session.userName = name;
      req.session.userId = response._id;
      
  }else{
    throw '账号密码错误';
  }
})

module.exports = router;
