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
	prompt("Enter 2 integers and I will respond with the larger number.")
	var num1 = ("Please input the first integer.")
	var num2 = ("Please input your second integer.")
	if (num1 == num2) {
		alert("These 2 integers are the same, please input 2 different integers!")
	}
	else if (num1 > num2){
		alert(num1 +" is the larger integer!")
	}
	else if (num2 > num1){
		alert(num2 +" is the larger integer!")
	}
}
//Multiply integers given by the user
function multiplynum() {
	prompt("In this game I will multiply 3 integers you give me!")
	numA = ("Enter the first integer")
	numB = ("Enter the second integer")
	numC = ("Enter the third integer")

	alert("The product of the integers is " + numA * numB * numC);
}
//Assignment 4 
function assignmentA4() {
	for (let i = 1; i <= 100 i++){
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz")
		}
		else if (i%3 === 0) {
			console.log("Fizz")
		}
		else if (if%3 === 0) {
			console.log("Buzz")
		}
		else {
			console.log(i)
		}
	}
}
//Triangle made out of astrics 
function assignmentB4() {
	var numZ = prompt ("How many intervals do you want in the triangle?")
	var stars = " *"
	numZ -= 1;
	console.log("'"+stars+" '")
	for (let 1 = 0; i <numZ i++){
		stars += " *"
		console.log("'"+stars+" '")
	}
}
//encryption assignemnt 
function enc() {
	var regularmessage = prompt ("Enter a message you wish to encrypt!");
	var ciphertext = ''''; 
	var wordlist = plaintext.split('''');
	var alp ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	for (var i = 0; i = worlist.length; i++) [
		check = alp.indexOf(wordlist[i]);
		cp=Math.cell((check * 2) / 5);
		ciphertext = ciphertext +m alp[cp;]
}
console.log(ciphertext); 