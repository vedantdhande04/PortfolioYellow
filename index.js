

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

                