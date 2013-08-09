$(function() {
	var responsive = function() {
		// set pad
		$('#pad').height($('#info').height());
		// affix
		$('#info').affix({
			offset: {
				top: $('#pic').height()
			}
		});
		// scrollspy
		$('body').scrollspy({
			offset: $('#info').height()
		});
		$('body').scrollspy('refresh');
		// fixing the gap
		$('.navbar-nav a').click(function(e) {
			e.preventDefault();
			$($(this).attr('href'))[0].scrollIntoView();
			if ($(window).width() > 768) {
		    	scrollBy(0, -$('#info').height());
			}
		});
	}

	$(window).resize(function() {
		responsive()
	});
	responsive();
});