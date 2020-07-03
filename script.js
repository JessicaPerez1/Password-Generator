//welcome alert
alert("Click the Generate Button to start!");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var result;

//set character variables to strings and use split to convert them into arrays
var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "1234567890".split("");
var sym = "!#$ %& '()*+,-./:;<=>?@[]^_`{|}~".split("");

// Write password to the #password input with generatePassword() function
function generatePassword() {
  var majorBank = [];
  //ask user how long they want the password to be
  passwordLength = prompt("Pick a number between 8 and 128");
  //if the password >128 or <8, or it's not a number, user does NOT meet creteria, run the function generatePassword again, if user input meets creteria, move on to next
  if (
    isNaN(passwordLength) ||
    parseInt(passwordLength) > 128 ||
    parseInt(passwordLength) < 8
  ) {
    alert("Please choose a valid number between 8 and 128");
    return generatePassword();
  }
  // character variables set to false inside the function so that they reset each time we hit generate button
  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  var confirms = 0;

  //set newPassword variable to an empty array, where user input will live
  var newPassword = [];
  var majorBank = [];

  // confirm user wants these character types in their password, it will change values to true
  numbers = confirm("Do you want numbers in your password?");
  console.log(numbers);
  symbols = confirm("Do you want symbols in your password?");
  console.log(symbols);
  caps = confirm("Do you want caps in your password?");
  console.log(caps);
  lowercase = confirm("Do you want lowercases in your password?");
  console.log(lowercase);

  // count the number of confirms and get the first 4 characters of newPassword
  if (numbers) {
    majorBank = majorBank.concat(num);
    confirms = confirms + 1;
  }
  if (symbols) {
    majorBank = majorBank.concat(sym);
    confirms = confirms + 1;
  }
  if (caps) {
    majorBank = majorBank.concat(alphabetCaps);
    confirms = confirms + 1;
  }
  if (lowercase) {
    majorBank = majorBank.concat(alphabetLowercase);
    confirms = confirms + 1;
  }
  //user needs to have at lease 1 confirms - if not, return to the beginning
  if (confirms === 0) {
    alert("Choose at least 1 of each data type. Try again!");
    return generatePassword();
  }
  console.log(confirms);

  // if confirmed, pull randomly 1 character from each of the lists and add the character at the end of the newPassword array
  if (numbers) {
    newPassword.push(num[randomPull(num)]);
  }
  if (symbols) {
    newPassword.push(sym[randomPull(sym)]);
  }
  if (lowercase) {
    newPassword.push(alphabetLowercase[randomPull(alphabetLowercase)]);
  }
  if (caps) {
    newPassword.push(alphabetCaps[randomPull(alphabetCaps)]);
  }
  console.log(newPassword);

  //now that we have at least 1 of each character type, determine how many characters to pull from majorBank, and add at the beginning of newPassword array
  for (var i = 0; i < passwordLength - confirms; i++) {
    newPassword.unshift(majorBank[randomPull(majorBank)]);
  }

  //create a newpassword array by joining all characters
  console.log(newPassword);
  newPassword = newPassword.join("");
  password = newPassword;
  console.log(newPassword);
  // return function as newPassword
  return newPassword;
}

//function randomPull will take in a string and pull random indexes
function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}
//will add newPassword generated to the passwordText area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
