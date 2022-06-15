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

  passwordOptions.passwordLength = inputLength;

};

// function to ask the user if they want letters in their password
var letterChoice = function() {
  //ask if they want random lowercase letters
  passwordOptions.lowerCase = confirm("Would you like lowercase letters to be included in your password?");
  passwordOptions.upperCase = confirm("Would you like uppercase letters to be included in your password?");
  passwordOptions.numbers =  confirm("Would you like numbers to be included in your password?");
  passwordOptions.special = confirm ("Would you like special characters to be included in your password?");

  let i = 0;
  while (passwordStorage.length < passwordOptions.passwordLength ) {
    i++;
    if (passwordOptions.lowerCase) {
      passwordStorage += passwordInfo.lowerCase[Math.floor(Math.random() * passwordInfo.lowerCase.length)]
    }

    if (passwordOptions.upperCase) { 
      passwordStorage += passwordInfo.upperCase[Math.floor(Math.random() * passwordInfo.upperCase.length)]
    }

    if (passwordOptions.numbers) {
      passwordStorage += passwordInfo.numbers[Math.floor(Math.random() * passwordInfo.numbers.length)]
    }

    if (passwordOptions.special) {
      passwordStorage += passwordInfo.special[Math.floor(Math.random() * passwordInfo.special.length)]
    }

  }
};

var passwordStorage = ""

// Write password to the #password input
function writePassword() {
  promptLength();
  letterChoice();

  var passwordText = document.querySelector("#password");
  passwordText.value = passwordStorage;
};


// Button Information / Variables 
 var passwordInfo = {
  numbers: "0123456789",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!@#$%^&*`~"
 };

 var passwordOptions = {
    passwordLength: 0,
    numbers: false,
    lowerCase: false,
    upperCase: false,
    specialCharacters: false
 }

 // End of Button Information / Variables

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
