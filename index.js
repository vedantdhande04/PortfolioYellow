

$( "#logo" ).hover(
     function() {
      $( this ).removeClass( "logoborder" );
      $( this ).addClass( "logonoborder" );
    },function() {
        $( this ).addClass( "logoborder" );
        $( this ).removeClass( "logonoborder" );
      }
  );


  $( ".circle" ).hover(
    function() {
     $( this ).removeClass( "circleanime" );
     $( this ).addClass( "circleanimated" );
     
   },function() {
       $( this ).addClass( "circleanime" );
       $( this ).removeClass( "circleanimated" );
       
     }
 );

//for circle 1

 $( ".fast" ).hover(
  function() {
    $( this ).addClass( "fastanimated" );   
    $(".circle1").addClass("longtransform");
  }
        ,
    function(){
      $( this ).removeClass( "fastanimated" );
      $(".circle1").removeClass("longtransform");
    });

    $(".fast").click(function() {
      $(".circle1").toggleClass("longanime");
      $(".circle1").addClass("longtransform");
  });

//for circle 2

  $( ".evolve" ).hover(
    function() {
      $( this ).addClass( "fastanimated" );   
      $(".circle2").addClass("longtransform");
    }
          ,
      function(){
        $( this ).removeClass( "fastanimated" );
        $(".circle2").removeClass("longtransform");
      });
  
      $(".evolve").click(function() {
        $(".circle2").toggleClass("longanime");
        $(".circle2").addClass("longtransform");
    });

//for circle 3

    $( ".dynamic" ).hover(
      function() {
        $( this ).addClass( "fastanimated" );   
        $(".circle3").addClass("longtransform");
      }
            ,
        function(){
          $( this ).removeClass( "fastanimated" );
          $(".circle3").removeClass("longtransform");
        });
    
        $(".dynamic").click(function() {
          $(".circle3").toggleClass("longanime");
          $(".circle3").addClass("longtransform");
      });

    $( ".evolve" ).hover(
      function() {
        $( this ).addClass( "fastanimated" );},
        function(){
          $( this ).removeClass( "fastanimated" );
        });
    
        $( ".dynamic" ).hover(
          function() {
            $( this ).addClass( "fastanimated" );},
            function(){
              $( this ).removeClass( "fastanimated" );
            });
        
  
            $( ".nav-link" ).hover(
              function() {
                $( this ).addClass( "navanimate" );},
                function(){
                  $( this ).removeClass( "navanimate" );
                });

          // For the cute yellow 
                $(document).ready(function() {
                  function moveDiv() {
                    var parentDiv = $('#parentDiv');
                    var div = $('#movingDiv');
                    var position = 0;
                    var direction = 1; 
                
                    setInterval(function() {
                      position += direction * 2; //speeeeeeeed
                
                      
                      if (position >= parentDiv.width() - div.width()) {
                        direction = -1; 
                        div.css('transform', 'scaleX(-1)'); 
                      }
                
                      
                      if (position <= 0) {
                        direction = 1; 
                        div.css('transform', 'scaleX(1)'); 
                      }
                
                      div.css('left', position + 'px');
                    }, 50); 
                  }
                moveDiv();
                });
      
        //For cute yellow's messages
                $(document).ready(function() {
                  function moveDiv() {
                    var parentDiv = $('#parentDiv');
                    var div = $('#movingmsg');
                    var position = 0;
                    var direction = 1; 
                
                    setInterval(function() {
                      position += direction * 2; 
                      if (position >= parentDiv.width() - div.width()) {
                        direction = -1; 
                         
                      }

                      if (position <= 0) {
                        direction = 1; 
                        div.css('transform', 'scaleX(1)'); 
                      }
                
                      
                      div.css('left', position + 'px');
                    }, 50); 
                  }       
                  moveDiv(); 
                });


                // Hiding and unhiding the messages
                $(document).ready(function toggleClassWithDelay() {
                  $("#movingmsg").removeClass("movingmsganime")
                  .delay(12000).queue(function(next){
                      $(this).addClass("movingmsganime");
                     next();
                      setTimeout(toggleClassWithDelay, 6000); 
                  });
                    });


                    //random image selector , idk how to make it work together with above function so wrote it differently
        $(document).ready(function() {
          function rollDice() {
              var randomNumber1 = Math.floor(Math.random() * 4) + 1;
              $("#movingmsg").css("background-image", "url(./msg" + randomNumber1 + ".jpg)");
          }
          rollDice();
          setInterval(rollDice, 13000);
      });

