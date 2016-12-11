$(window).ready(function(){
	$('.icon-navbar').hover(function(){
		var id = $(this).attr('name');
		$(id).animate({'opacity':'1'},1000);

	},
	  function(){
	  	var id = $(this).attr('name');
	  	$(id).animate({'opacity':'0'},300);
	});
});