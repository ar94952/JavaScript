/*
Anthony Rivera
anthonyriv2@my.smccd.edu
library_clock.js
Assignment 8
12/6/2017
*/
"use strict";
var createClock = function(hourSpan, minuteSpan, secondSpan, ampmSpan) {
    // private state
    var displayCurrentTime = function() {
        var now = new Date();
        var hours = now.getHours();
        var ampm = "AM"; // set default value
        
        // correct hours and AM/PM value for display
        if (hours > 12) { // convert from military time
            hours = hours - 12;
            ampm = "PM";

} else { // adjust 12 noon & 12 midnight
    switch (hours) {
        case 12: // noon
        ampm = "PM";
        break;
        case 0: // midnight
        hours = 12;
        ampm = "AM";

    }

}

hourSpan.firstChild.nodeValue = hours;
minuteSpan.firstChild.nodeValue = padSingleDigit(now.getMinutes());
secondSpan.firstChild.nodeValue = padSingleDigit(now.getSeconds());
ampmSpan.firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

// public methods
var obj = {
    start : function(){
        displayCurrentTime();
        setInterval(displayCurrentTime, 1000);

    }
};

return obj;

};