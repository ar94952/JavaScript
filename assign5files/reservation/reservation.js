/****************************
 *Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 117 OL
 *reservation.js
 *Assignment #5
 *10/21/2017
 ****************************/
"use strict";
var $ = function(id) { return document.getElementById(id); };

var saveReservation = function() {
  
sessionStorage.setItem('name', $("name").value ); //set the name key value in sessionStorage
   sessionStorage.setItem('phone', $("phone").value ); //set the phone key value in sessionStorage
   sessionStorage.setItem('email', $("email").value ); //set the email key value in sessionStorage
   sessionStorage.setItem('arrivalDate', $("arrival_date").value ); //set the arrival_date key value in sessionStorage
   sessionStorage.setItem('nights', $("nights").value ); //set the nights key value in sessionStorage
   sessionStorage.setItem('adults', $("adults").value ); //set the adults key value in sessionStorage
   sessionStorage.setItem('children', $("children").value ); //set the children key value in sessionStorage
  
   if($("standard").checked){ //check if the standard checbox is selected
       sessionStorage.setItem('roomType', $("standard").value ); // set the roomType key value in sessionStorage
   }
   else if($("business").checked){ //check if the business checbox is selected
       sessionStorage.setItem('roomType', $("business").value ); // set the roomType key value in sessionStorage
   }
   else if($("suite").checked){ //check if the suite checbox is selected
       sessionStorage.setItem('roomType', $("suite").value ); // set the roomType key value in sessionStorage
   }
     
   if($("king").checked){ //check if the king checbox is selected
       sessionStorage.setItem('bedType', $("king").value ); // set the bedType key value in sessionStorage
   }
   else if($("double").checked){ //check if the double checbox is selected
       sessionStorage.setItem('bedType', $("double").value ); // set the bedType key value in sessionStorage
   }

   if($("smoking").checked){ //check if the smoking checbox is selected
       sessionStorage.setItem('smoking', 'yes' ); // set the smoking key value to yes in sessionStorage
   }else {
       sessionStorage.setItem('smoking', 'no' ); // set the smoking key value to no in sessionStorage
   }
  
// submit form
$("reservation_form").submit();
};

window.onload = function() {
$("submit_request").onclick = saveReservation;
$("arrival_date").focus();
};