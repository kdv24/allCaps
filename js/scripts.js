$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		var myThoughtsInput = $("input#myThoughts").val().toUpperCase();
		

		$('.myThoughts').text(myThoughtsInput);

	


		$('#back-talk').show();
		event.preventDefault();
		})
});