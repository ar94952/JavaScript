/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
library_die.js
Assignment 7
12/1/2017
 */
"use strict";
var Die = function() {};
Die.prototype.rollDie = function() {
    var random = Math.random();
    random = Math.floor(random * 6);
    return random + 1;
};