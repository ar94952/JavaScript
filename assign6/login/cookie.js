/********************************
 *Anthony Rivera ****************
 *anthonyriv2@my.smccd.edu ******
 *CIS 114 OL ********************
 *cookie.js ***************
 *Assignment 6 Exercise  login***
 *11/26/2017 ********************
 ********************************/
"use strict";

var getCookieByName = function (cookieName) {
var name = cookieName + "=";
var uriDecodedCookie = decodeURIComponent(document.cookie);
var cookiePartsList = uriDecodedCookie.split(';');
for (var i = 0; i < cookiePartsList.length; i++) {
var c = cookiePartsList[i];
//Remove any spaces at the string of the cookie string
while (c.charAt(0) == ' ') {
c = c.substring(1);
}

if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
};

var setCookie = function (name, value, days) {
var expiryDate = new Date(); //Get the current date
expiryDate.setTime(expiryDate.getTime() + (days * 24 * 60 * 60 * 1000)); //set the expiry time to the current date
var expireDateAsString = "expires=" + expiryDate.toUTCString();

//format: name=value;expires=<time>;path=<url to where the cookie belongs to>
document.cookie = name + "=" + value + ";expires=" + expireDateAsString + ";path=/";
};

var deleteCookie = function (name) {
//Set the cookie to a past date, so that it gets invalidated and removed. In this case, it is set to start of epoch time
document.cookie = name + '=;expires=Thu, 01 Jan 2020 00:00:01 GMT;';
};

