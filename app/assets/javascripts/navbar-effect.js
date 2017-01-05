$(window).ready(function(){
  $('.icon-navbar').click(function(){
     $('.icon-navbar').not(this).each(function(){
         $(this).rotate({angle:0,animateTo:0});
     });
     $(this).rotate({angle:30,animateTo:180});
})

});