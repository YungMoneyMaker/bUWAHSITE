function GTN() {
	
	var x = Math.floor((Math.random()* 1000) +1);
	var attemps = 0;
	do {
		var answer = prompt ("Guess any number between 1 and 1000, To exit this game type 'q'.");
		attemps+=1;
		if (answer > 1000) {
			alert("Invalid input, please answer with a number between 1 and 1000!");
		}
		else if (answer < 1) {
			alert("Invalid input, please answer with a number between 1 and 1000!");
		}
		else if (answer < x) {
			alert("The answer is higher!");
		}
		else if (answer > x) {
			alert("The answer is lower!");
		}
		else if (answer == x) {
			alert("Correct, the right answer was " +x +"!");
			alert("You guessed the correst number in only " +attemps +" attemps!");
		}
	} 	while(answer!="q");
}
