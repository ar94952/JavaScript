/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *slide_show.js
 *Midterm 1
 *10/6/2017
 */
"use strict";
var $ = function(id) { return document.getElementById(id); };

// create the slideshow object 
var slideshow = createSlideshow();
    
var changeSpeed = function() {
    var msg = 'Please enter a new speed in milliseconds (200 min).';
    var milliseconds = parseInt(prompt(msg, "2000"));
    // call slideshow object methods here
};

window.onload = function() { 
    var slides = [
    	{href:"gear.jpg", title:"Fishing Gear"}, 
        {href:"plane.jpg", title:"Bush Plane"},
        {href:"release.jpg", title:"Catch and Release"},
        {href:"lunch.jpg", title:"Streamside Lunch"},
        {href:"dusk.jpg", title:"Day's End"},
        {href:"fishing.jpg", title:"Deep Sea Fishing"}, 
        {href:"fishing2.jpg", title:"Fishing in Style"},
        {href:"fishing3.jpg", title:"Giant Tilapia"},
        {href:"fishing4.jpg", title:"Dark Side of Fishing"},
        {href:"hero.jpg", title:"Safety"}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    $("play_pause").onclick = slideshow.createToggleHandler();
    $("change_speed").onclick = changeSpeed;	
};