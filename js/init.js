//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "01 nov 2024 13:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	