

$(window).ready(function(){
$(".thumbnails").click(function() {
    var content = $(this).attr("name");
    $("#image").fadeOut(1000, function() {
        $("#image").attr("src",content);
    }).fadeIn(1000);
    return false;
});

});