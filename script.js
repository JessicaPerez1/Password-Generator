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
// variable grouping all characters into 1 string then convert into an array
var majorBank = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$ %& '()*+,-./:;<=>?@[]^_`{|}~".split(
  ""
);
//set a newPassword variable
var newPassword = [];

// Write password to the #password input
function generatePassword() {
  //declare passwordLength var inside the generatePassword function
  var passwordLength;
  //ask user how long they want the password to be
  passwordLength = prompt("How long would you like the password to be?");
  //if the password>128 or <8, run the function generatePassword again, else, move on
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a valid number");
    return generatePassword();
  }
  //vars set to false inside function so that they reset each time we run the function
  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  var confirms = 0;
  //create an empty array for the newpassword, where new characters will populate
  var newPassword = [];

  // check if user wants these character types in their password, will change value to true
  numbers = confirm("Do you want numbers in your password?");
  console.log(numbers);
  symbols = confirm("Do you want symbols in your password?");
  console.log(symbols);
  caps = confirm("Do you want caps in your password?");
  console.log(caps);
  lowercase = confirm("Do you want numbers in your password?");
  console.log(lowercase);

  // count the number of confirms and get the first 4 characters of newPassword
  if (numbers) {
    confirms = confirms + 1;
  }
  if (symbols) {
    confirms = confirms + 1;
  }
  if (caps) {
    confirms = confirms + 1;
  }
  if (lowercase) {
    confirms = confirms + 1;
  }
  console.log(confirms);

  // if confirmed, pull randomly at least 1 character from each of the confirmed lists and add to the newPassword
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

  //determine how many characters to pull from majorBank, and add at the beginning of newPassword array
  for (var i = 0; i < passwordLength - confirms; i++) {
    newPassword.unshift(majorBank[randomPull(majorBank)]);
  }
  //create a newpassword array
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
