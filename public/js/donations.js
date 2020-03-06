$(document).ready(function() {
    // Getting references to our form and inputs
    // everyform element id
    const donationForm = $("#donationForm");
    const title = $("#title");
    const desc = $("#desc");
    const categoryDonate = $("#categoryDonate");
    const quantity = $("#quantity");
    const price = $("#price");
    const imageUpload = $("#imageUpload");
    
  
    // When the form is submitted, we grab the description and send it to DB
    donationForm.on("submit", function(event) {
      event.preventDefault();
      var userDonation = {
        productName:title.val().trim(),
        productDesc:desc.val().trim(),
        productCategory:categoryDonate.val().trim(),
        productPrice:price.val(),
        productImage:imageUpload.val(),
        productQuantity:quantity.val()
      };
      console.log(userDonation.productName)
   // If we have an email and password we run the loginUser function and clear the form
      addDonation(userDonation.description);
      itemDescription.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function addDonation(description) {
      $.post("/api/donate", {
        description: description
      })
        .then(function() {
          window.location.reload("/donate");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });