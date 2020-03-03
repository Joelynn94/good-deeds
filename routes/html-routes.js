// Require Express 
const express = require("express");

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Using express router for our html routes 
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/cart', function(req, res) {
  res.render('cart');
});

// Here is the route for the post form
router.get('/post', function(req, res) {
  return res.render('post');
});

module.exports = router;