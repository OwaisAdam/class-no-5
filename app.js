function displayValues() {
    var userInput = document.getElementById("numberInput").value;
    var number = parseInt(userInput);
    
    var roundOffValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);
    
    var resultString = "a. Number: " + number + "<br>";
    resultString += "b. Round off value: " + roundOffValue + "<br>";
    resultString += "c. Floor value: " + floorValue + "<br>";
    resultString += "d. Ceil value: " + ceilValue + "<br>";
    
    document.getElementById("result").innerHTML = resultString;
}








function displayValues() {
    var input = document.getElementById("inputNumber").value;
    var number = parseFloat(input);

    if (isNaN(number) || number >= 0) {
        document.getElementById("output").innerHTML = "Please enter a valid negative floating-point number.";
        return;
    }

    var roundOffValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);

    var outputText = "<h3>Number: " + number + "</h3>";
    outputText += "<p>Round Off Value: " + roundOffValue + "</p>";
    outputText += "<p>Floor Value: " + floorValue + "</p>";
    outputText += "<p>Ceil Value: " + ceilValue + "</p>";

    document.getElementById("output").innerHTML = outputText;
}




function rollDice() {
  
    var diceValue = Math.floor(Math.random() * 6) + 1;

    document.getElementById("output").innerHTML = "The dice rolled: " + diceValue;
}






function tossCoin() {
  
    var randomNumber = Math.random();

    var coinResult = (randomNumber < 0.5) ? "Heads" : "Tails";

    document.getElementById("output").innerHTML = "The coin landed on: " + coinResult;
}







function generateRandomNumber() {

    var randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("output").innerHTML = "Random number: " + randomNumber;
}









function parseWeight() {
    var input = document.getElementById("inputWeight").value;
    var weight = parseFloat(input);

    
    if (!isNaN(weight)) {
        document.getElementById("output").innerHTML = "Your weight is: " + weight + " kgs";
        return;
    }

   
    if (input.includes("kgs") || input.includes("kilograms")) {
       
        var numericPart = input.match(/\d+(\.\d+)?/);
        if (numericPart !== null) {
            weight = parseFloat(numericPart[0]);
            document.getElementById("output").innerHTML = "Your weight is: " + weight + " kgs";
            return;
        }
    }

    document.getElementById("output").innerHTML = "Invalid input. Please enter your weight in kgs.";
}








function checkNumber() {
    
    var secretNumber = Math.floor(Math.random() * 10) + 1;

   
    var userInput = parseInt(document.getElementById("userInput").value);

   
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        document.getElementById("output").innerHTML = "Please enter a valid number between 1 and 10.";
    } else {
        
        if (userInput === secretNumber) {
            document.getElementById("output").innerHTML = "Congratulations! You guessed the secret number!";
        } else {
            document.getElementById("output").innerHTML = "Sorry, the secret number was " + secretNumber + ". Try again!";
        }
    }
}