/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
jquery.reveal.js
Assignment 8
12/5/2017
*/
(function($){
    $.fn.reveal = function() {
        return this.each(function() {
            $(this).click(function(evt) {
                $(this).toggleClass("minus");
                if ($(this).attr("class") !== "minus") {
                    $(this).next().hide();
                } else {
                    $(this).next().show();
                }
				evt.preventDefault();
            });
        });	
    };
})(jQuery);