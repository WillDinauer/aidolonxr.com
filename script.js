$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form data
    var formData = $(this).serialize();
    
    // Submit the form data using AJAX
    $.ajax({
      type: 'POST',
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCDfL1nBoGPHRswOgUQ4WboeqAcs14G-kWAsbL5TpSqT_oaA/formResponse",
      data: formData,
      dataType: 'xml',
      success: function() {
        // Show a success message
        alert('Successful signup!');
        
        // Clear the form
        $('form').trigger('reset');
      },
      error: function() {
        // Show an error message
        alert('Successful signup!');
        console.log('form failure');
        
        // Clear the form
        $('form').trigger('reset');
      }
    });
  });
});