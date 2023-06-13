console.log("Your index.js file is loaded correctly!")

$(document).ready(function() {
   
    var $overlay = $("#contact-overlay");
    var $contactLink = $("#contact-link");
  
   
    $contactLink.hover(
      function() {
        $overlay.show().insertAfter("header");
      },
      function() {
      
        if (!$overlay.is(":hover") && !$contactLink.is(":hover")) {
          $overlay.hide();
        }
      }
    );
  
  
    $(document).on("click", function(event) {
      if (!$(event.target).closest("#contact-link, #contact-overlay").length) {
        $overlay.hide();
      }
    });
  });