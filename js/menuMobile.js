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

    $(document).click(function (e)
	{
	    var container = $(".MobileMenu");

	    if (!container.is(e.target) && !e.is(".MobileMenuIcon")// if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.hide();
	    }
	});
	
});