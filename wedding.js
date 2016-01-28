// This code runs when the page loads
$(function() {

  $(".list-group-item").on("click", function(event) {
  	//* always do prevent default!!
    event.preventDefault();

    var elementThatWasClicked = $(this);
    
    console.log(elementThatWasClicked);
    //* records action in console

    elementThatWasClicked.parent().remove();
    //* need to add in "parent" so that you remove the div containers that the pictures are in
  })

})