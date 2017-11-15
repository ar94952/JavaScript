/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *faqs.js
 *Assignment #4 Exercise 9-1
 *10/17/2017
 */
$(document).ready(function() {
	
    $("#faqs h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
	        $(this).next().slideUp(1000, "easeInBounce");
	   	}
	   	else {
		    $(this).next().slideDown(1000, "easeOutBounce");
	   	}
    }); 
	
	$("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000, "easeInExpo" )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1000, "easeOutExpo" );
		    
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000, "easeInExpo" )  
			   .animate( { fontSize: "175%", left: 0 }, 1000, "easeOutExpo" );
	}); 
	
}); 
