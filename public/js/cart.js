// const cartLength = document.querySelectorAll('#removeDiv')
// cartLength.textContent = cartLength.length;

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
  // document.querySelector('#cart-total').textContent = 0
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

function productTotal() {
 // var cartItemContainer = document.getElementsByClassName('product-row')[0]
  var cartRows = document.getElementsByClassName('product-inner')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('row-price')[0]
      var quantityElement = $("#cartQuantity").val()
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      total += parseFloat(price * quantityElement) //price * quantity
      const rowTotal = document.getElementsByClassName('row-total').innerText = '$' + total
      console.log(total)
      console.log(rowTotal)

  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  document.querySelector('#cart-total').textContent = formatter.format(total)
      //total = Math.round(total * 100) / 100
      
}
productTotal($(this).data('id'))

function totalUp() {
  var proTotals = document.getElementsByClassName('product-inner')[0];
  //var rowsTotal = parseFloat(rowsTotal)
  var total = 0
  for (var i = 0; i < proTotals.length; i++) {
    var proTotal = proTotals[i];
    //var totalElement = proTotal.getElementsByClassName('product-total')[i];
    //var total = totalElement.innerText;
    //total = parseFloat(total)
    
    
  }
  console.log("help")
    
}
totalUp()