"use strict";
var game = {
    player1: new Pig(),  
    player2: new Pig(), 
    currentPlayer: null, 
    start: function(name1, name2) {
        this.player1.name = name1;
        this.player2.name = name2;
        this.currentPlayer = this.player1;
        return this;
    },
    isValid: function() {
        if ( this.player1.name === "" || this.player2.name === "" ) {
            return false;
        } else { 
            return true; 
        }
    },
    reset: function() {
		this.player1.reset();
		this.player2.reset();
        // call the reset() method on each of the player Pig objects
        
    },
    changePlayer: function() {debugger;
		if(this.currentPlayer.name == this.player1.name)
		{
			this.currentPlayer = this.player2;
		}
		else
		{
			this.currentPlayer = this.player1;
		}
        // determine whether player1 or player2 is the current player, then
        // update the currentPlayer property to hold the other player.
        
    },
    hold: function(score1, score2) {
		this.currentPlayer.hold();

        // call the hold() method of the current player
        
        if(this.currentPlayer.name == this.player1.name)
		{
			this.player2.total = score2;
		}
		else if(this.currentPlayer.name == this.player2.name)
		{
			this.player1.total = score1;
		}
        // determine whether player1 or player2 is the current player, then
        // update that player's score with the current total
        
    },
    checkWinner: function() {
		if(this.player1.total >= 100)
		{
			return this.player1.name;
		}
		if(this.player2.total >= 100)
		{
			return this.player2.name;
		}
		
		return "none";
        // check the players' totals to see if either is at or above 100
        // points. If so, return that player's name. Otherwise, return 
        // the string "none".
        
    }
};