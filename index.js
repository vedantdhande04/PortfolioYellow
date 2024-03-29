

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
