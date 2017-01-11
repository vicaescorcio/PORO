
$(window).ready(function(){
	$(".about2").hide(); 
  $('#about').click(
	  function(){
		  
  // $('.slider').slideUp(2000);
     
     $( ".slider" ).hide( "drop", {},1000 ); 
     $(".about2").delay( 1000 ).show("fade",{},5000);
	  });


});