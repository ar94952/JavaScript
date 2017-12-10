/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
faqs.js
Assignment 8
12/5/2017
*/
"use strict";
$(document).ready(function() {
    // setting up the click event handler for the h2 elements
    $("#faqs h2").click(function() {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
    }); // end click  
}); // end ready
