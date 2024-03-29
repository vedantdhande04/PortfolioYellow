

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

 $( ".fast" ).hover(
  function() {
    $( this ).addClass( "fastanimated" );},
    function(){
      $( this ).removeClass( "fastanimated" );
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

                