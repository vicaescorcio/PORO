
$(window).ready(function(){
  $('nav.div1 ul li a').click(
  	 
  	
	  function(){
		  var status = $(this).attr('id');
  // $('.slider').slideUp(2000);
     
     $( ".container" ).hide( "drop", {},1000,function(){
        //$('.load').fadeIn("slow");
        $('#content').empty();
        
        $('#content').load(status,'',function(){
          //$(".load").fadeOut("slow");
           
        });
     
    } ); 
    // $(toLoad).delay( 1000 ).show("fade",{},5000);
	  });


});