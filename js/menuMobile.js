$(document).ready(function() {
	$(".MobileMenuIcon").click(function(){
		if ($(".MobileMenu").is(":hidden")) {
			$(".MobileMenu").show();

		}else {
			$(".MobileMenu").hide();
		};
	});	

	$(window).resize(function(){
        if ($(window).width() > 581) {
			$(".MobileMenu").hide();
		};
    });

});