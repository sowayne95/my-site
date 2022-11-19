$(document).ready(function () {
    $("button").click(function() {
      checked = $("input[type=checkbox]:checked").length;
 
      if(!checked) {
        alert("Please select the checkbox to submit.");
        return false;
      }
        
    });
});

