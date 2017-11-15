/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *book_list.js
 *Assignment #4 Exercise 8-3
 *10/17/2017
 */
$(document).ready(function() {
    $("#categories h2").click(
       	function() {
			$(this).toggleClass("minus");
			if ($(this).attr("class") != "minus") {
	   			$(this).next().hide();
			}
			else {
	       		$(this).next().show();
			}
			
    		$("#image").attr("src", "");
    		$("#image").attr("style", "display:none;");    	}
    );
    
	$("#web_images a, #java_images a, #net_images a, #database_images a").each(function() {
		var imageURL = $(this).attr("href");
				
		var bookImage = new Image();
		bookImage.src = imageURL;
		
			
		$(this).click(function(evt) {
			$("#image").attr("src", imageURL);
			$("#image").attr("style", "style:block;");
    	 	
    		evt.preventDefault();
  		}); 
	});
});