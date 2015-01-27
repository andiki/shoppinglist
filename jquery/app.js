$(document).ready(function() {
	$('.mainbox').keydown(function(enter){
		if (enter.keycode==13) {
			postItem();
		}
	})