/*
Anthony Rivera
anthonyriv2@my.smccd.edu
CIS 114 OL
jslotto.html
Assignment 1.4
August 24, 2017 
*/

var ask = prompt("Enter number of tickets (1-10)");

function numbers() {
    for(var i=0; i<5; i++) {
        var line = Math.floor(Math.random()*47)+1;
        document.write(line + '*');
    }
	for(var i=0; i<1; i++) {
        var line = Math.floor(Math.random()*27)+1;
        document.write(line + 'mega');
    }
}

for(var x=0; x<ask; x++) {
    document.write(numbers() + '<br>');
}

