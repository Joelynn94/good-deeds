const addToCart = $(".card-cart")
addToCart.on("click", function() {
    addToCart.map((cart) => {
        let id = cart.dataValues.id;
        console.log(id)
    })
})
