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

var numbers = [ '0',
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
]

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

function passwordOptions() {
  var passwordLength = parseInt(
    prompt('In the text box below, please choose the desired number of Characters.'), 
    10
  );

  if (Number.isNaN(passwordLength)) {
    alert('Password length value can only be numbers.');
    return null;
  }

  if (passwordLength < 8) {
    alert('Password length has to be at least 8 characters.');
    return null;
  }

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

  var userOptions = {
    passwordLength: passwordLength,
    confirmSpecial: confirmSpecial,
    confirmNumbers: confirmNumbers,
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
  };

  return userOptions;
}

function passwordRandom(arr) {
  var randomList = Math.floor(Math.random() * arr.passwordLength);
  var randomValue = arr[randomList];

  return randomValue;
}

function passwordCreate() {
  var options = passwordOptions();
  var result = [];
  var x = [];
  var y = [];

  if (!options) return null;

  if (options.x) {
    x = x.concat(special);
    y.push(passwordRandom(special));
  }

  if (options.x) {
    x = x.concat(numbers);
    y.push(passwordRandom(numbers));
  }

  if (options.x) {
    x = x.concat(lowerCase);
    y.push(passwordRandom(lowerCase));
  }

  if (options.x) {
    x = x.concat(upperCase);
    y.push(passwordRandom(upperCase));
  }

  for (var i = 0; i < options.passwordLength; i++) {
    var x = passwordRandom(x);
    result.push(x);
  }

  for (var i = 0; i < y.passwordLength; i++) {
    result[i] = y[i];
  }

  return result.join('');
}


// Starter Code Below

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
