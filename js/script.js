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

function getMessage() {
  let inputName = document.getElementById("inputName").value;
  let inputEmail = document.getElementById("inputEmail").value;
  let inputMessage = document.getElementById("inputMessage").value;

  if( inputName.length == 0 || inputEmail.length == 0 || inputMessage.length == 0 ){
    alert("Kindly input your details");
  }
  else{
    alert("Hello "+inputName+" Your message has been sent successfully");
  }
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;
   