
// Updates items in cart
function addToCart(id) {
  $.ajax({
    method: 'PUT',
    url: `/api/cart/${id}`
  }).then(function(data){
    console.log(data)
  })
}

$('.container').on("click", '.card__btn', function() {
  console.log('RAN CLICK')
  console.log($(this).data('id'))

  addToCart($(this).data('id'))
})


// Deletes an item in the cart
function removeItem(id) {
  $.ajax({
    method: 'DELETE',
    url: `/api/cart/${id}`
  }).then(function(data){
    console.log(data)
  })
}

// event to remove a div 
$('.container').on("click", '.remove-item', function() {
  console.log('RAN DELETE')
  console.log($(this).data('id'))

  removeItem($(this).data('id'))
  $('#removeDiv').remove();
})


// Deletes all items from cart
function removeAllItems () {
  $.ajax({
    method: 'DELETE',
    url: `/api/cart/${id}`
  }).then(function(data){
    console.log(data)
  })
}

// event to remove divs
$('.container').on("click", '#clear_cart', function() {
  console.log('RAN DELETE ALL')
  console.log($(this).data('id'))

  $('.product-row').remove();
})