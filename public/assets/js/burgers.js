$(function() {
  
  $(".devour-burger").on("click", function(event) {
    event.preventDefault();
    
    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };
    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger devoured");
        
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });
  
});
