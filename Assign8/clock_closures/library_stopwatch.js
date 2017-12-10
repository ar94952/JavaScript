/*
Anthony Rivera
anthonyriv2@my.smccd.edu
library_stopwatch.js
Assignment 8
12/6/2017
*/
"use strict";

var createStopwatch = function(minuteSpan, secondSpan, msSpan) {
    // private state
    //global stop watch timer variable and elapsed time object
    var stopwatchTimer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 };
    var tickStopwatch = function() {
        // milliseconds by 10 milliseconds increment
        elapsed.milliseconds = elapsed.milliseconds + 10;
        // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;

        }
        // if seconds total 60, increment minutes by one and reset seconds to zero
        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;

        }
        //display new stopwatch time
        minuteSpan.firstChild.nodeValue = padSingleDigit(elapsed.minutes);
        secondSpan.firstChild.nodeValue = padSingleDigit(elapsed.seconds);
        msSpan.firstChild.nodeValue = elapsed.milliseconds;

    };
    var padSingleDigit = function(num) {
        return (num < 10) ? "0" + num : num;
    };
    // event handler functions
    var startStopwatch = function() {
        // first tick of stop watch & set interval timer to tick
        // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
        // variable so next two functions can stop timer.
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    };
   
    var stopStopwatch = function() {
        // stop timer
        clearInterval(stopwatchTimer);
    };

    var resetStopwatch = function() {
        // stop timer
        clearInterval(stopwatchTimer);
        // clear elapsed object and stopwatch display
        elapsed = { minutes:0, seconds:0, milliseconds:0 };
        minuteSpan.firstChild.nodeValue = "00";
        secondSpan.firstChild.nodeValue = "00";
        msSpan.firstChild.nodeValue = "000";

    };
    
    // public methods
    var obj = {
        start : function(){
            startStopwatch();
        },
        stop : function(){
            stopStopwatch();
        },
        reset : function(){
            resetStopwatch();
        }
    };
    return obj;

};