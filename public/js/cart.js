
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

// Updates items in cart
function changeProductQty(id, qty) {
  $.ajax({
    method: 'PUT',
    url: `/api/cart/${id}`,
    productQuantity: qty
  }).then(function (data){
    console.log(data)
  })
}

$('.container').on("click", '#cartQuantity', function() {
  console.log('RAN QTY Update')
  const qty = $("#cartQuantity option:selected").val();

  console.log(qty)

  changeProductQty($(this).data('id'), qty)
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

function productTotal() {
 // var cartItemContainer = document.getElementsByClassName('product-row')[0]
  var cartRows = document.getElementsByClassName('product-inner')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('row-price')[0]
      var quantityElement = cartRow.getElementsByClassName('row-quantity')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = parseFloat(price) //price * quantity
      document.getElementsByClassName('row-total')[i].innerText = '$' + total
      //console.log(total)
  }
      //total = Math.round(total * 100) / 100
      
}
productTotal(/*$(this).data('id')*/)
