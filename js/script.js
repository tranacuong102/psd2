$(document).ready(function(){
	if(screen.width >= 768) {
		$(window).scroll(function(){
			offsetBody = $('html,body').scrollTop();
			if (offsetBody > 1) {
				$('.menu').addClass('menuFixed');
				
			}
			else {
				$('.menu').removeClass('menuFixed');
				
			}
		})
	}
});