$(window).load(function() {
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
			var offset = $($(this).attr('href')).offset().top;
			if ($(window).width() > 768) {
				offset -= $('#info').height();
			}
			scrollTo(0, offset);
		});
	}

	$(window).resize(function() {
		responsive()
	});
	responsive();
});