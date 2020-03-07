// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const exphbs = require('express-handlebars')
// Requiring passport as we've configured it
const passport = require("./config/passport");
// Requiring our HTML routes for th views 
const routes = require('./routes/html-routes');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

const mysql = require('mysql');
let connection = '';

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Sets up mysql connection
  connection = mysql.createConnection({
    host: 'blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mkttv3f2bzkxs59x',
    password: 'p59g74zkosaofwyh',
    database: 'p7xx91oifm8orr9d'
  })
}

connection.connect();

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/login-html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Using the controller (router)
// =============================================================
app.use(routes)

// Setting the view engine for templating - to Handlebars
// =============================================================
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
