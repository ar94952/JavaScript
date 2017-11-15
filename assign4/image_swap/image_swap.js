/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *image_swap.js
 *Assignment #4 image swap
 *10/17/2017
 */
$(document).ready(function() {
	$("#startup").delay(2000).fadeOut(1000, function(){
		$("#ram_tap").fadeIn(1000);
	});

	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	$("#image_list a").hover(
		function(e)
		{ 
			$(this).stop(true).animate({ top:15 }, 1000); 
			var imageURL = $(this).attr("href");
			$("#image").attr("src", imageURL);
			var caption = $(this).attr("title");
			$("#caption").text(caption);
			e.preventDefault();
		},
		function(e)
		{ 
			$(this).stop(true).animate({ top: 0 }, "fast"); 
		}
	);
	$("image_list:first-child:first-child").focus();
}); 