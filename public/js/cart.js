'use strict'
const addToCart = $(".card-cart")

addToCart.on("click", function(){
  addToCart.map((cart) => {
    let id = cart.id;
    console.log(id)
  })
  
})

