/*Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 114 OL
 *convert_temp.js
 *Midterm 1
 *10/6/2017
 */
"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};

function convertTemp() {
    var toCelsius = document.getElementById("to_celsius").checked;
    var temperature = document.getElementById("degrees_entered").value;
    var outputLABEL = document.getElementById("temp");
    
    if (toCelsius) {
        outputLABEL.innerHTML = (5/9) * (value - 32);
    } else {
        outputLABEL.innerHTML = value * (9/5) + 32;
    }
}