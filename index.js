

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

                $(document).ready(function() {
                  function moveDiv() {
                    var parentDiv = $('#parentDiv');
                    var div = $('#movingDiv');
                    var position = 0;
                    var direction = 1; // 1 for moving right, -1 for moving left
                
                    setInterval(function() {
                      // Move the div
                      position += direction * 2; // Adjust speed by changing the value
                
                      // Check if the div reaches the right edge of the parent div
                      if (position >= parentDiv.width() - div.width()) {
                        direction = -1; // Change direction to move left
                        div.css('transform', 'scaleX(-1)'); // Flip the div horizontally
                      }
                
                      // Check if the div reaches the left edge of the parent div
                      if (position <= 0) {
                        direction = 1; // Change direction to move right
                        div.css('transform', 'scaleX(1)'); // Reset div to original orientation
                      }
                
                      // Apply new position
                      div.css('left', position + 'px');
                    }, 50); // Adjust interval for smoother or faster movement
                  }
                
                  moveDiv(); // Call the function to start moving the div
                });
