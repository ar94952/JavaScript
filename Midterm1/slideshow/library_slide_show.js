/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *library_slide_show.js
 *Midterm 1
 *10/6/2017
 */
"use strict";
var createSlideshow = function() {
    var timer, play = true, speed = 2000;
    var nodes = { image: null, caption: null };
    var img = { cache: [], counter: 0 };
    
    var stopSlideShow = function() { clearInterval( timer ); };
    var displayNextImage = function() {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.firstChild.nodeValue = image.title;
    };
    var setPlayText = function(btn) {
        btn.value = (play)? "Resume": "Pause";
    };
    return {
        loadImages: function(slides) {
            var image;
            for ( var i = 0; i < slides.length; i++ ) {
                image = new Image();
                image.src = "images/" + slides[i].href;
                image.title = slides[i].title;
                img.cache.push( image );
            }
            return this;
        },
        startSlideShow: function() {
            if (arguments.length === 2) { 
                nodes.image = arguments[0]; 
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, speed);
            return this;
        },
        createToggleHandler: function() {
            var me = this;
            return function() {
                if ( play ) { stopSlideShow(); } else { me.startSlideShow(); }
                setPlayText(this);
                play = ! play; 
            };
        }
    };
};