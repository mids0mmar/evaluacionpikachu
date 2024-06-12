$(document).ready(function() {
  $("#boton-der").click(function() {
    $(".mover").animate({left: "+=100px"});
  });

  $("#boton-izq").click(function() {
  $(".mover").animate({left: "-=100px"});
  });


  $("#boton-invisible").click(function(){
  $(".mover").fadeTo(1000, 0.1);
  });

  $("#boton-revertir").click(function(){
    $(".mover").fadeTo(1000, 1);
  });

  $("#boton-pestana").click(function(){
    $(".mover").fadeOut(250).fadeIn(250); 
  });
  
});
                         
