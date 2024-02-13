// Array for special characters
var special = [
  '`',
  '~',
  '!',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
];
// Array for numbers
  var numbers = [ 
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ];
//Array for lower cased characters
    var lowerCase = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
//Array for upper cased characters
      var upperCase = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ];
// Function controlling user prompts for the possible password options
  function passwordOptions() {
    var length = parseInt(
      prompt('In the text box below, please choose the desired number of Characters.'), 
      10
    );
// If statement for number check in user options
    if (Number.isNaN(length)) {
      alert('Password length value can only be numbers.');
      return null;
    }
// If statement for Min/Max Length
    if (length < 8) {
      alert('Password length has to be at least 8 characters.');
      return null;
    }

    if (length > 128) {
      alert('Password length has to be less than 129 characters.');
    }
// User prompt messages
    var confirmSpecial = confirm(
      'Do you want Special Characters in Password? Click OK for yes, or CANCEL for no.'
    );

    var confirmNumbers = confirm(
      'Do you want Numeric Characters in Password? Click OK for yes, or CANCEL for no.'
    );

    var confirmLowerCase = confirm(
      'Do you want Lower Cased Characters in Password? Click OK for yes, or CANCEL for no.'
    );

    var confirmUpperCase = confirm(
      'Do you want Upper Cased Characters in Password? Click OK for yes, or CANCEL for no.'
    );
// Object for storing user options
    var passwordOptions = {
      length: length,
      confirmSpecial: confirmSpecial,
      confirmNumbers: confirmNumbers,
      confirmLowerCase: confirmLowerCase,
      confirmUpperCase: confirmUpperCase,
    };

    return passwordOptions;
  }
// Function for random items from the lists at the top
  function passwordRandom(arr) {
    var randomList = Math.floor(Math.random() * arr.length);
    var randomValue = arr[randomList];

    return randomValue;
  }
// Function to Create password
  function passwordCreate() {
    var options = passwordOptions();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];

    if (!options) return null;

    if (options.confirmSpecial) {
      possibleCharacters = possibleCharacters.concat(special);
      guaranteedCharacters.push(passwordRandom(special));
    }

    if (options.confirmNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
      guaranteedCharacters.push(passwordRandom(numbers));
    }

    if (options.confirmLowerCase) {
      possibleCharacters = possibleCharacters.concat(lowerCase);
      guaranteedCharacters.push(passwordRandom(lowerCase));
    }

    if (options.confirmUpperCase) {
      possibleCharacters = possibleCharacters.concat(upperCase);
      guaranteedCharacters.push(passwordRandom(upperCase));
    }
    // Loop to iterate along the length of the password 
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = passwordRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
// For Loop that makes sure each of the character types are selected
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
// Makes the result into a string that passes to the next the starter code
    return result.join('');
  }


  // Starter Code Below

  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = passwordCreate();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
