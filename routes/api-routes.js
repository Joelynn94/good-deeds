// LORNA get the routes to work but am posting to the index not sure what route we need
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
//Creates requirement of isAuthenticated for restricted access
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Route to post new Products
  app.post("/api/donations", function(req, res) {
    const donateReq = req.body;
    console.log(donateReq)
    db.Product.create({
      productName: donateReq.productName,
      productDesc: donateReq.productDesc, 
      productPrice: donateReq.productPrice, 
      productCategory: donateReq.productCategory, 
      productQuantity: donateReq.productQuantity, 
    }).then(function(data) {
      res.json(data);
    })
  })

  // UPDATE route for adding a product to the cart
  app.put("/api/cart/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        console.log(req.session.cart)
        if (req.session.cart) {
          req.session.cart.push(data)
        } else {
          req.session.cart = [data]
        }

        res.json(data)
      })
  });

  // Get route for retrieving a single product
  app.get("/api/cart/:id", function(req, res) {
    db.Cart.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });

  // Get route for retrieving a all products
  app.get("/api/cart/", function(req, res) {
    db.Product.findAll({ })
      .then(function(data) {
        res.json(data);
      });
  });

  // Delete route to delete an item in the cart
  app.delete("/api/cart/:id", function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        console.log(data)
        if (req.session.cart) {
          req.session.cart.remove(data)
        }
        console.log(req.session.cart)
        res.json(data);
      });
  });
  
  
app.get("/", function(req, res) {
  const {cat, search } = req.query;
  if(cat && search){
      db.Product.findAll({ 
        where: {
          productCategory: {
              [Op.like]: `%${cat}%`
          },
          productName: {
              [Op.like]: `%${search}%`
          }
        } 
      })
      .then(function(data) {
        res.render('index', { Product: data })
      })

  } else if(cat === undefined && search){
    db.Product.findAll({ 
      where: {
        productName: {
            [Op.like]: `%${search}%`
        }
      } 
    })
    .then(function(data) {
      res.render('index', { Product: data })
    })

} else if(cat && search === undefined){
  db.Product.findAll({ 
    where: {
      productCategory: {
          [Op.like]: `%${cat}%`
      }
    } 
  })
  .then(function(data) {
    res.render('index', { Product: data })
  })

} else {

    db.Product.findAll()
    .then(function(data) {
      res.render('index', { Product: data })
    })
  }

});

};


