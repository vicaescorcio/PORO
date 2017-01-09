
$(window).ready(function(){



	$('.imagem-mascara').click(
		function(){
			$('.s').materialbox();
		});


	$(".gallerie").hide(); 
  $('#project').click(
	  function(){
		  
  // $('.slider').slideUp(2000);
     $( ".slider" ).hide( "drop", {},1000 ); 
     $(".gallerie").delay( 1000 ).show("fade",{},5000);
	  });


});