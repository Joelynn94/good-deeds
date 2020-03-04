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

// Here is the route for the donate form
router.get('/donate', function(req, res) {
  res.render('donate');
});

// Here is the route for the description form
router.get('/description', function(req, res) {
  res.render('description');
});


module.exports = router;