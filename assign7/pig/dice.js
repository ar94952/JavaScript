/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
dice.js
Assignment 7
12/1/2017
 */
"use strict";
$(document).ready(function() {  
    $("#new_game").click(function() {
        // clear any previous data from the page
        $("#result").text( "" );
        $("#score1").val( "0" );  
        $("#score2").val( "0" );
        $("#die").val( "0" );
        $("#total").val( "0" );
        
        // reset the game object and then start a new game, passing in
        // the players' names
        game.reset();
		game.start($("#player1").val(), $("#player2").val());
        
        // if the game object contains valid data...
        if (game.isValid()) {
            // display the "turn" div, use the currentPlayer property of 
            // the game object to display the name of the player whose turn
            // it is, and set the focus on the Roll button
            $("#turn").addClass("open");
            $("#current").text( game.currentPlayer.name );
            $("#roll").focus();
        } else {
            // hide the "turn" div, notify the user to enter player names, 
            // and set the focus on the Player 1 text box
            $("#turn").removeClass("open");
            alert("Please enter two player names.");
            $("#player1").focus();
        }
    }); // end click()
    
    $("#roll").click(function() {
        // use the currentPlayer property of the game object to take a turn

		game.currentPlayer.takeTurn(); 
		
        $("#die").val(game.currentPlayer.roll);
        // set the value of the Die text box to the value of the roll 
        // property of the currentPlayer property
        
        if(game.currentPlayer.roll == 1){
			$("#total").val(0);
		}
		
		game.currentPlayer.total = game.currentPlayer.total + game.currentPlayer.turn;
		
		if(game.currentPlayer.name == $("#player1").val())
		{
			$("#score1").val(game.currentPlayer.turn); 
		}
		
		if(game.currentPlayer.name == $("#player2").val())
		{
			$("#score2").val(game.currentPlayer.turn); 
		}
		
		game.changePlayer();

		$("#current").text(game.currentPlayer.name);
		$("#total").val(game.currentPlayer.turn);
		
        // check the value of the roll property. If it's equal to 1, set the 
        // value of the Total text box to zero, use the game object to change
        // players, and use the currentPlayer property of 
        // the game object to display the name of the player whose turn
        // it now is. Otherwise, set the value of the Total text box to the 
        // value of the turn property of currentPlayer.
        
        
        // set the focus on the Roll button
        $("#roll").focus();
        
    }); // end click()
    
    $("#hold").click(function() {
		var score1 = $("#score1").val();
		var score2 = $("#score2").val();
		
		game.hold(score1, score2);
        // use the game object to hold, passing in the Score1 and Score2 elements.
        // Then use the game object to check the winner, storing the result in a
        // variable.
		
        var winnerName = game.checkWinner();
        if(winnerName == "none")
		{
			$("#die").val(0);
			$("#total").val(0);
			game.changePlayer();
			$("#current").text(game.currentPlayer.name);
			$("#roll").focus();
		}
		else
		{
			$("#current").text(winnerName + "is the winner.");
		}
		
		
        // If the value of the winner variable is "none", set the 
        // value of the Die and Total text boxes to zero, use the game object 
        // to change players, use the currentPlayer property of 
        // the game object to display the name of the player whose turn
        // it now is, and set the focus on the Roll button.  Otherwise, set the 
        // value of the result span element to indicate the name of the winner.
        game.reset();
    }); // end click()
    // set focus on initial page load
    $("#player1").focus();
}); // end ready()