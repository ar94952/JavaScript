/***************************
 *Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *password.js
 *midterm 2
 *Password Generator
 *11/5/017
 ***************************/
"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //interger value between 0 and max - 1
            random = random + 1; //interger value between 1 and max
        }
        return random;
    };

    $("#generate").click(function() {

        $("#password").val( "" ); // clear previous entry

        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
                                /*added code */
                                var value = $("#num").val(); 
                                var len = chars.length; 
                                var pwd = ""; 
                                var i; //i to iterate

                                //if entered value is not a number
                                if(isNaN(value))
                                {
                                                //alert given message
                                                alert("Please enter a valid number.");
                                                $("#num").val( "" ); //clear num filed
                                                $("#num").focus(); //focus num field
                                }

                                //if entered value is a number
                                else
                                {
                                                //iterate value number of times
                                                for(i=0;i<value;i++)
                                                {
                                                                pwd = pwd + chars.charAt(getRandomNumber(len)-1);
                                                }
                                                //place password value in password field
                                                $("#password").val(pwd);
                                }
    }); // end click()
   
    $("#clear").click(function() {
        $("#num").val( "" );
      $("#password").val( "" );
        $("#num").focus();
    }); // end click()

    // set focus on initial load
    $("#num").focus();
}); // end ready()