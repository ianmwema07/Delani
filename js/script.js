
    $(document).ready(function() {
      $(".design-hidden").click(function() {
        $(".design-hidden").fadeToggle();
        $(".design-show").fadeToggle();
      });
      $(".design-show").click(function(){
        $(".design-hidden").fadeToggle();
        $(".design-show").fadeToggle();
      });
      $(".development-hidden").click(function() {
        $(".development-hidden").fadeToggle();
        $(".development-show").fadeToggle();
      });
      $(".development-show").click(function(){
        $(".development-hidden").fadeToggle();
        $(".development-show").fadeToggle();
      });
      $(".product-hidden").click(function() {
        $(".product-hidden").fadeToggle();
        $(".product-show").fadeToggle();
      });
      $(".product-show").click(function(){
        $(".product-hidden").fadeToggle();
        $(".product-show").fadeToggle();
      });
    });