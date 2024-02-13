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

  if (length < 8) {
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
