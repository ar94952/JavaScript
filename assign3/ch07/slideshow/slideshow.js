/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
slideshow.js
Assignment # 3, 7-2
9/22/2017
 */
"use strict";
var $ = function (id) { return document.getElementById(id); };

var imageCache = [];
var imageCounter = 0;
var timer;

var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
};

window.onload = function () {
    var listNode = $("image_list");    // the ul element
    var links = listNode.getElementsByTagName("a");
    
    // Preload image, copy title properties, and store in array
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    // Attach start and pause event handlers
    $("start").onclick = function() {
        var slides = [
            {href:"images/release.jpg", title:"Catch and Release"}, 
            {href:"images/deer.jpg", title:"Deer at Play"},
            {href:"images/hero.jpg", title:"The Big One!"},
            {href:"images/bison.jpg", title:"Roaming Bison"},
    ];
        
        slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    };
    $("pause").onclick = function() {
        
    };
};