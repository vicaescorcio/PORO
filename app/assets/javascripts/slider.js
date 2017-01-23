$(window).ready(function(){
 $('.thumbs').portfolio({
                    cols: 3,
                    transition: 'slideDown'
                });



     $('.slider').hover(function() {
        $('.slider').slider('pause');
    }, function() {
        $('.slider').slider('start');
    });


});