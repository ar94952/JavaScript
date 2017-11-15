/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
jslotto.html
Assignment 1.4
August 24, 2017 
*/

var entry;
var letterGrade;
var total = 0; 
var entryCount = 0;
var errorString = "ERROR! You entered an invalid value. Enter number from 0 through 100\nOr enter 999 to exit";
do {
    // get something from user
    entry = prompt("Enter numeric grade from 0 through 100\nOr enter 999 to exit", 999);

    if(isNaN(entry)){  // check if it is not a number
        alert(errorString);  //show error if not a number
    }else{
        entry = parseInt(entry); // convert to number
        if (entry >= 0 && entry <= 100) {
           if (entry <= 59) {
               letterGrade = "F";
           }else
           if (entry <= 62) {
               letterGrade = "D-";
           }else
           if (entry <= 66) {
               letterGrade = "D";
           }else
           if (entry <= 69) {
               letterGrade = "D+";
           }else
           if (entry <= 76){
               letterGrade = "C";
           }else
           if (entry <= 79) {
               letterGrade = "C+";
           }else
           if (entry <= 82) {
               letterGrade = "B-";
           }else
           if (entry <= 86) {
               letterGrade = "B";
           }else
           if (entry <= 89) {
               letterGrade = "B+";
           }else
           if (entry <= 92) {
               letterGrade = "A-";
           }else
           if (entry <= 100) {
               letterGrade = "A";
           }
           total += entry;   // add the total
           entryCount += 1;  // add ont to count
           // display entry and grade
           alert("Number grade = " + entry + "\nLetter grade = " + letterGrade);
        }else // if not in valid range check if its 999
        if (entry != 999) {
           alert(errorString); // no show error
        }
    }
}while (entry != 999);  // do this till 999 is entered