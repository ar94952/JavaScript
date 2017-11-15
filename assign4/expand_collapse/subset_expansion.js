/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *subset_expansion.js
 *Assignment #4 expand collapse
 *10/17/2017
 */
$(document).ready(function() {
    $("#jdom a").click(function() {
        $(this).prev("div").toggle();
        if ($(this).prev("div").is(":visible")) {
            $(this).text("Show less");
        } else {
            $(this).text("Show more");
        }
    });
});