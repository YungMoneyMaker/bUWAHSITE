function GTN() {
	
	var x = Math.floor((Math.random()* 1000) +1);
	var attemps = 0

	do {
		var answer = prompt ("Guess any number between 1 and 1000, To exit this game type 'q'.");
		var answer = document.getElementID("GTN")
		++ attemps;
		if (answer > 1000) {
			alert("Invalid input, please answer with a number between 1 and 1000!");
	{
		else if (guess != int)
			alert("Please enter an integer value!");
	}
	}
		else if (guess < x)
			alert("The answer is higher that that!");
	}
	{
		else if (guess > x)
			alert("The answer is lower!");
	}
	{
		else if (guess == x)
			alert("Correct, the right answer was " +rand +"!");
			alert("You guessed the correst number in only " +attemps +" attemps!");
	}
	{
		if (guess == "q") break;
	}
}