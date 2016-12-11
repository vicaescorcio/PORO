$(window).ready(function(){
 //$('.logo').animate({'margin-left':'400px'},3000);
   $('#gal1').galereya();
    $(".button-collapse").sideNav();
    $('.slider').slider({full_width: true});
    $('.loading').hide(8000,function(){ $(this).remove(); });
    $(".div1").fadeIn(9000);
});

