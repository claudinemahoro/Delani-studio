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
    if(Name=="" || Email=="" || Message==""){
      alert("No name or email or message. Please fill all fields before sending.") 
    }
    else{
      alert("Hi "+ Name + "! Thank you for reaching out to us.")
    }
    
  })
});

$(document).ready(function(){
  $("#porto1").hide();

  $("#img1").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto1").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto1").fadeOut();
  });
});
$(document).ready(function(){
  $("#porto2").hide();

  $("#img2").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto2").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto2").fadeOut();
  });
});
$(document).ready(function(){
  $("#porto3").hide();

  $("#img3").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto3").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto3").fadeOut();
  });
});
$(document).ready(function(){
  $("#porto4").hide();

  $("#img4").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto4").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto4").fadeOut();
  });
});
$(document).ready(function(){
  $("#porto5").hide();

  $("#img5").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto5").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto5").fadeOut();
  });
});

$(document).ready(function(){
  $("#porto6").hide();

  $("#img6").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto6").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto6").fadeOut();
  });
});
$(document).ready(function(){
  $("#porto7").hide();

  $("#img7").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto7").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto7").fadeOut();
  });
});
$(document).ready(function(){
  $("#porto8").hide();

  $("#img8").hover(function(){
    $(this).animate({opacity: .8}, 100);
    $("#porto8").fadeIn();
  },
  function(){
    $(this).stop().animate({opacity:1}, 400);
    $("#porto8").fadeOut();
  });
});

