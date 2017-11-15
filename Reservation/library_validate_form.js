"use strict";
var RegisterForm = function() { };
RegisterForm.prototype = new Validate(); //inherit
// Method to validate individual field
RegisterForm.prototype.validateField = function(fieldName, text) {
   // AS per the field type the corresponding validation function is called and if the validation fails then the error is thrown out.
var field = fields[fieldName];
   if (!RegisterForm.prototype.isBlank(field)) {
           switch(fieldName){
               case 'arrival_date':
                   if (!RegisterForm.prototype.isDate(field)) throw text;
                   break;
               case 'nights':
                   if (!RegisterForm.prototype.isNumber(field)) throw text;
                   break;
               case 'email':
                   if (!RegisterForm.prototype.isEmail(field)) throw text;                              
                   break;
               case 'phone':
                   if (!RegisterForm.prototype.isPhone(field)) throw text;                                              
                   break;
           }
   }else{
       throw text;
   }
};
// Error message methods
RegisterForm.prototype.setError = function( fieldName, message ) {
$(fieldName + "_error").setAttribute("class", "error");
$(fieldName + "_error").firstChild.nodeValue = message;
};
RegisterForm.prototype.clearError = function( fieldName, message ) {
$(fieldName + "_error").setAttribute("class", "");
$(fieldName + "_error").firstChild.nodeValue = message || "";
};
// Form methods
RegisterForm.prototype.resetForm = function() {
for ( var fieldName in fields ) {
this.clearError(fieldName, fields[fieldName].message);
$(fieldName).value = ""; //clear corresponding textbox
}
};
RegisterForm.prototype.validateForm = function() {
var isOK = true;
for ( var fieldName in fields ) {
this.clearError(fieldName);
// add try/catch block to validate field
       // Added Try and catch block.. as per the field type I have called the validateField and set the corresponding error message
       // Incase the validation fails the error which is thrown from the validateField is handled over here.
       try{
           switch(fieldName){
               case 'arrival_date':
                   RegisterForm.prototype.validateField(fieldName,"Invalid Date Format. Please reenter date..");
                   break;
               case 'nights':
                   RegisterForm.prototype.validateField(fieldName,"   Invalid No of Nights.");
                   break;
               case 'name':
                   RegisterForm.prototype.validateField(fieldName,"Name can not be null.");              
                   break;
               case 'email':
                   RegisterForm.prototype.validateField(fieldName,"Invalid Email Id");                              
                   break;
               case 'phone':
                   RegisterForm.prototype.validateField(fieldName,"Invalid Phone number");                                              
                  
                   break;
           }
          
       }catch(err){
           RegisterForm.prototype.setError(fieldName,err);
           isOK=false;
           break;
       }   
}
return isOK;
};