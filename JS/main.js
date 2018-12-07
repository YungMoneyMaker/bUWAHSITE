//innerHTML code
function myFunction() {
    document.getElementById("Ping!, Pong!").innerHTML = "Pong!";
}
//Javascript Name and Colour Game// 
function A1(){
	var fName = prompt("Wagawn fham saying you have a nameazz??");
	var myColour = promt("Yo pick a colour one time," +fName);

	if (myColour == "red"){
	}
}
//Obtaints 2 numbers from the user and reponds with the larger interger 
function largernum() {
	alert("Enter 2 integers and I will respond with the larger number. Press 'OK' to continue!");
	var num1 = prompt("Please input the first integer.");
	var num2 = prompt("Please input your second integer.");
	if (num1 == num2) {
		alert("These 2 integers are the same, please input 2 different integers!");
	}
	else if (num1 > num2){
		alert(num1 +" is the larger integer!");
	}
	else if (num2 > num1){
		alert(num2 +" is the larger integer!");
	}
}
//Multiply integers given by the user
function multiplynum() {
	alert("In this game I will multiply 3 integers you give me. Press 'OK' to continue!");
	numA = prompt("Enter the first integer");
	numB = prompt("Enter the second integer");
	numC = prompt("Enter the third integer");

	alert("The product of the integers is " + numA * numB * numC);
}
//Assignment 4 
function assignmentA4() {
	prompt("Press 'OK' to play FizzBuzz")
	for (let i = 1; i <= 100; i++){
		if (i%3 === 0 && i%5 === 0) {
			alert("FizzBuzz");
		}
		else if (i%3 === 0) {
			alert("Fizz");
		}
		else if (i%3 === 0) {
			alert("Buzz");
		}
		else {
			alert(i);
		}
	}
}
//Triangle made out of astrics 
function assignmentB4() {
	alert("I will create a star based off how many intervals you whish to create.  Press 'OK' to continue!")
	var numZ = prompt ("How many intervals do you want in the triangle?");
	var stars = " *";
	numZ -= 1;
	alert("'"+stars+" '");
	for (let i = 0; i <numZ; i++){
		stars += " *";
		alert("'"+stars+" '");
	}
}
//encryption assignemnt 
function encryption() {
	alert("I will encrypt a message you input. Press'OK' to begin!")
	varplaintext = prompt("Enter a message you would like to encrypt in 'Pig Latin'!")
	plaintext = plaintext.toLowerCase();

	var ciphertext = "";
	var wordlist = plaintext.split(" ");

	for (var i = 0 < wordlist.length; i++;) {
		ciphertext = ciphertext + wordlist[i][0]+"ay ";
	}
	else {
		ciphertext = ciphertext + wordlist[i]+ " ";
	}
}