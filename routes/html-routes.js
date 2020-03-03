// Require Express 
const express = require("express");

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Using express router for our html routes 
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;