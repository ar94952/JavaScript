/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
clock.js
Assignment # 3, clock
9/22/2017
*/
"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {

};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
  function displayTime() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
   	var seconds = currentTime.getSeconds();
}
};