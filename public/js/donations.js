$(document).ready(function() {
    // Getting references to our form and inputs
    var donationForm = $('#donationForm');
    var itemDescription = $("input#itemDescription");
  
    // When the form is submitted, we grab the description and send it to DB
    donationForm.on("submit", function(event) {
      event.preventDefault();
      var userDonation = {
        description: itemDescription.val().trim(),
      };

    //   Decide if we want this validation for an empty form
  
    //   if (!userData.email || !userData.password) {
    //     return;
    //   }
  
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