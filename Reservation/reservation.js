"use strict";
var $ = function(id) { return document.getElementById(id); };
var frm;
var saveReservation = function() {

sessionStorage.arrivalDate = $("arrival_date").value;
   // Have added the values in the fields array object so that in the validation section I can refer the corresponding array.
   fields['arrival_date']=sessionStorage.arrivalDate;
sessionStorage.nights = $("nights").value;
   fields['nights']=sessionStorage.nights;
sessionStorage.adults = $("adults").value;
sessionStorage.children = $("children").value;
  
sessionStorage.roomType = $("standard").value; // default value
if ($("business").checked) {
sessionStorage.roomType = $("business").value;
}
if ($("suite").checked) {
sessionStorage.roomType = $("suite").value;
}
  
sessionStorage.bedType = $("king").value; //default value
if ($("double").checked) {
sessionStorage.bedType = $("double").value;
}
  
if ($("smoking").checked) {
sessionStorage.smoking = "yes";
} else {
sessionStorage.smoking = "no";
}
sessionStorage.name = $("name").value;
   fields['name']=sessionStorage.name;  
sessionStorage.email = $("email").value;
   fields['email']=sessionStorage.email;  
sessionStorage.phone = $("phone").value;
   fields['phone']=sessionStorage.phone;  
  
// submit form
   if(RegisterForm.prototype.validateForm()){
$("reservation_form").submit();
   }
};
var clearForm = function() {
frm.resetForm();
$("arrival_date").focus();
};
window.onload = function() {
frm = new RegisterForm();
frm.resetForm();
  
$("submit_request").onclick = saveReservation;
$("clear").onclick = clearForm;
$("arrival_date").focus();
};