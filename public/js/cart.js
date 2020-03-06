const cart = localStorage.getItem('cart') || []

// Submits a new post and brings user to blog page upon completion
function submitPost(id) {
  $.ajax({
    method: 'PUT',
    url: `/api/cart/${id}`
  }).then(console.log)
}

console.log($('.container'))

$('.container').on("click", '.card__btn', function() {
  console.log('RAN CLICK')
  console.log($(this).data('id'))

  submitPost($(this).data('id'))
  // addToCart.map((cart) => {
  //   let id = cart.id === id;
  //   console.log(id)
  //   submitPost(id);
  //   return id.find(id)
  // })
})

