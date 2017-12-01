"use strict";

$(document).ready(function(){
    var tasks = [];

    var displayTaskList = function() {
        tasks.sort();
      
        $("#task_list").val( tasks.join("\n") );
        $("#task").focus();
    };
  
    $("#add_task").click(function() {
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            $("#task").focus();
        } else {
            // add new task to tasks array
            tasks.push( task );

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTaskList();
        }
    });
  
    $("#delete_task").click(function() {
        var task_index = prompt("Enter the index number of the task to delete! And the index number should be start from 0.");
       //-- Add data validation to the Delete Task event
       if(isNaN(task_index)){
           alert("Given value should be an interger/number.");
           return;
       }
       if(task_index <= tasks.length-1){
           if (typeof tasks[task_index] != "undefined"){
               // use the splice() method of the tasks array to delete the element at the specified index.
               tasks.splice(task_index,1);
               // call the displayTaskList() function to re-display the tasks.
               displayTaskList();
           }
       }else{
           alert("Given index number has exceeded the number of task length.");
           return;
       }
      
    });
  
    $("#clear_tasks").click(function() {
        tasks = [];
        $("#task_list").val( "" );
        $("#task").focus();
    });
  
    // set focus on initial load
    $("#task").focus();
});