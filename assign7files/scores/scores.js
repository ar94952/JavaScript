"use strict";
$(document).ready(function() {
    /*
   The two global arrays :
       scores array is for score values
       names array is for strings that display the students’ names and scores
   */
   var scores=[],names=[];
  
    var displayScores = function () {
       var tscore=0;
       //calculate the average score of all the scores in the first array
        $.each( scores, function( i, val ) {
          tscore=tscore+parseInt(val);
       });
       var avgscore=tscore/scores.length;
      
       //display average score in the text box below the text area
       $("#average_score").val(avgscore);
      
       //code to get the students’ names and scores in the second array
       // and displays them in the text area
       var html="";
       $.each( names, function( i, val ) {
          if(html!="")
           html=html+"\n"+val;
          else
           html=val;
       });
       $( "#scores").html(html);
    };
  
    $("#add_button").click(function() {
       //save the score in the first array
        scores.push($("#score").val());
       //save the name and score string in the second array
        names.push($("#first_name").val()+" "+$("#last_name").val()+", "+$("#score").val());
      
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
      
       //redisplay the updated data
       displayScores();
        $("#first_name").focus();
    }); // end click()
  
    $("#clear_button").click(function() {
       //code that clears both arrays
       names=[];
       scores=[];
      
        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );
        $("#first_name").focus();
    }); // end click()
     
    $("#sort_button").click(function() {
       //create array of record like structure i.e. json oobjects from array of string in names array          
       var rows=[];
       $.each( names, function( i, val ) {
          var nameScoreArray=val.split(",");
          var nameArray=nameScoreArray[0].split(" ");
          rows.push({"first_name":nameArray[0],"last_name":nameArray[1],"score":nameScoreArray[1]});
       });
       // sort the json array on last_name  
       sortJsonArray(rows,"last_name",true);
          
       //re-displays the score information in the text area
       var html="";      
       $.each( rows, function( i, row ) {
           if(html=="")
               html=row.first_name+" "+row.last_name+", "+row.score;
           else  
               html=html+"\n"+row.first_name+" "+row.last_name+", "+row.score;
       });
      
       $( "#scores").html(html);
    }); // end click()
  
    $("#first_name").focus();
  

   //utility method to sort array of json object on given sort key(prop)
   function sortJsonArray(myarray,prop, asc) {
       myarray = myarray.sort(function(a, b) {
           if (asc) {
               return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
           } else {
               return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
           }
       });
   }
}); // end ready()