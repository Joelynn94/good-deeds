// Require Express 
const express = require("express");

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Using express router for our html routes 
const router = express.Router();

router.get('/', function(req, res) {
  // If the user already has an account send them to the members page
  res.sendFile(path.join(__dirname, "../views/layout/main.handlebars"));
});

module.exports = router;