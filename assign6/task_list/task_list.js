/********************************
 *Anthony Rivera ****************
 *anthonyriv2@my.smccd.edu ******
 *CIS 114 OL ********************
 *task_list.js ***************
 *Assignment 6 Exercise  15-2 ***
 *11/26/2017 ********************
 ********************************/

/* Text book instructions asked to change code on developer mode
in chrome, which may not save any new codes...*/
"use strict";

$(document).ready(function(){
	var displayTasks = function() {
        $("#task_list").val( localStorage.E15tasks );
        $("#task").focus();
    };
	
    $("#add_task").click(function() {   
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {  
            // add task to web storage 
            var tasks = localStorage.E15tasks || "";  // default value of empty string
            localStorage.E15tasks = tasks.concat( task, "\n" );      

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTasks();
        }
    });
    
    $("#clear_tasks").click(function() {
        localStorage.removeItem( "E15tasks" );
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    displayTasks();
});