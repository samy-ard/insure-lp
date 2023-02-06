(function($) {
	$(document).ready(function() {
		$('.navbar-toggle').on('click', function(e) {
			e.preventDefault();
			$('.toggle-icon').toggleClass('show');
			$($(e.currentTarget).data('target')).toggleClass('show');
		});
	});
})(jQuery);