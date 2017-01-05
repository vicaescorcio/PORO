$(window).ready(function(){
     $('.slider').hover(function() {
        $('.slider').slider('pause');
    }, function() {
        $('.slider').slider('start');
    });
});