$(window).ready(function(){
 //$('.logo').animate({'margin-left':'400px'},3000);
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
    gutter: 10
});





    $(".button-collapse").sideNav();
    $('.slider').slider({full_width: true});
    $('.loading').hide(8000,function(){ $(this).remove(); });
    $(".div1").fadeIn(9000);
});

