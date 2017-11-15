/****************************
 *Anthony Rivera
 *anthonyriv2@my.smccd.edu
 *CIS 117 OL
 *libary_fields.js
 *Assignment #5
 *10/21/2017
 ****************************/
"use strict";
var fields =
{
   arrival_date :
   {
      message: "Use mm/mm/yyyy format.",
      required: "Arrival date is required.",
      isDate: "Arrival date is invalid"
   },
   nights:
   {
      message: "Must be a valid number.",
      required: "Number of nights required.",
      isNumber: "Nights must be a number."
  
   },
   name:
   {
      required: "Name is required."
   },
   email:
   {
      message: "Must be a valid email address.",
      required: "Email is required.",
      isEmail: "Email address is invalid."
   },
   phone:
   {
      message: "Use 123-456-7890 format.",
      required: "Phone number is required.",
      isPhone: "Phone number is invalid."
   }
};