/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *library_event.js
 *Midterm 1
 *10/6/2017
 */
"use strict";
var evt = {
    attach: function(node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName, func);
        } else if (node.attachEvent) {
            node.attachEvent("on" + eventName, func);
        }
    },
    detach: function(node, eventName, func) {
        if (node.removeEventListener) {
            node.removeEventListener(eventName, func);
        } else if (node.detachEvent) {
            node.detachEvent("on" + eventName, func);
        }
    },
    preventDefault: function(e) {
        e = e || window.event;
        if ( e.preventDefault ) { e.preventDefault(); }
        else { e.returnValue = false; }
    }
};