var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req,res,next) {

  var produtos = [{
    "name":"sabonete",
    "description": "sabonete protex",
    "price": "1.99"
  },
  {
    "name":"leite",
    "description": "leite ninho",
    "price": "7.8"
  },
  {
    "name":"panela",
    "description":"panela tramontina",
    "price":"150.99"
  },{
    "name":"chinelos",
    "description":"par de chinelos havaianas",
    "price":"20.50"
  }]

  res.json(produtos);
});

module.exports = router;
