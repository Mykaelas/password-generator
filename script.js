// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");


//function to generate a random number
var randomNumber = function(min, max) {
  // return value;
};

// function to ask user how the length of their password
var promptLength = function() {
  //ask use the length of their password
  var inputLength = window.prompt('How long would you like your password to be? Enter a number between 8 - 128.')

  inputLength = parseInt(inputLength);  
  
  while(inputLength < 8 || inputLength > 128) {
    window.alert("You need to provide a valid answer! Please try again");
    inputLength = window.prompt('How long would you like your password to be? Enter a number between 8 - 128.'); 
    inputLength = parseInt(inputLength);  
  }

  // return inputLength;

  passwordOptions.passwordLength = inputLength;

};

var characterInfo = function() {
  var numbers
}

// Write password to the #password input
function writePassword() {
  var password = promptLength();
  // var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var startGenerator = function () {
  //reset password field 
  // promptLength.reset();
};

// Button Information / Variables 
 var passwordInfo = {
  numbers: randomNumber(0, 9),
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!@#$%^&*()`~'"
 };

 var passwordOptions = {
    passwordLength,
    numbers,
    lowerCase,
    upperCase,
    specialCharacters
 }

 // End of Button Information / Variables

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);
