// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	let num1 = parseInt(stringA)
	let num2 = parseInt(stringB)
	sum = num1 + num2; 
	document.getElementById("resultNumber").value=sum;

};
