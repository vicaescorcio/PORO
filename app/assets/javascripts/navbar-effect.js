$(window).ready(function(){
  $('.icon-navbar').click(function(){
     $('.icon-navbar').not(this).each(function(){
         $(this).rotate({angle:0,animateTo:0});
     });
     $(this).rotate({angle:30,animateTo:30});
})

$(".icon-navbar").rotate({
  bind:
  {
    mouseover : function() {
    $(this).rotate({animateTo:30})
  },
    mouseout : function() {
    $(this).rotate({animateTo:0})
    }
  }

});

});