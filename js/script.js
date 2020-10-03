$(document).ready(function(){
  $(".photo1, .description1").click(function(){
    $(".photo1").toggle();
    $(".description1").toggle();
  });
  $(".photo2, .description2").click(function(){
      $(".photo2").toggle();
      $(".description2").toggle();
  });
  $(".photo3, .description3").click(function(){
      $(".photo3").toggle();
      $(".description3").toggle();
  });
});
$(document).ready(function(){
  $("#submit").click(function(){
    var Name= $(".name").val();
    var Email=$(".email").val();
    var Message=$("#message").val();
    if(Name!=" " && Email!=" " && Message!=" "){
      alert("Hi "+ Name + "! Thank you for reaching out to us.")
    }
    
  })
});