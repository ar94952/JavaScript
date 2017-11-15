/****************************
 *Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 117 OL
 *reservation.js
 *Assignment #5
 *10/21/2017
 ****************************/
function validateForm() {

//Assign form values to variables

var arrivalDate= document.getElementById("arrival_date").value;

var noOfNights=document.getElementById("nights").value;

var name=document.getElementById("name").value;

var email=document.getElementById("email").value;

var phone=document.getElementById("phone").value;

var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  

//Validate if the value entered in each text box is empty

if(arrivalDate.trim()==""){

window.alert("Please Enter arrival date");

document.getElementById("arrival_date").focus();

return false;

}

else if(noOfNights.trim()==""){

window.alert("Please Enter nights");

document.getElementById("nights").focus();

return false;

}

else if(name.trim()==""){

window.alert("Please Enter Name");

document.getElementById("name").focus();

return false;

}

else if(email.trim()==""){

window.alert("Please Enter Email");

document.getElementById("email").focus();

return false;

}

else if(phone.trim()==""){

window.alert("Please Enter Phone Number");

document.getElementById("phone").focus();

return false;

}

  

if(isNaN(noOfNights)){

window.alert("Invalid value for Nights, please enter number");

return false;

}

//Check for valid Pattern

var result = email.match(emailPattern);

if(result==null || result==""){

window.alert("Enter Valid email ")

return false;

}

return true;

}

// end ready