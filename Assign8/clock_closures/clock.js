/*
Anthony Rivera
anthonyriv2@my.smccd.edu
clock.js
Assignment 8
12/6/2017
*/
"use strict";

var $ = function(id) { return document.getElementById(id); };
window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    var clock = createClock($("hours"),$("minutes"),$("seconds"),$("ampm"));
    clock.start();
    
    // set up stopwatch event handlers
    var stopWatch = createStopwatch($("s_minutes"),$("s_seconds"),$("s_ms"));
    $("start").onclick = stopWatch.start;
    $("stop").onclick = stopWatch.stop;
    $("reset").onclick = stopWatch.reset;
};