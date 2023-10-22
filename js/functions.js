function checkLength (string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrom(string) {
  string = string.replaceAll(' ','').toLowerCase();
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];
    newString += char;
  }

  return newString === string;
}

function getNumber (string) {

  let result = '';

  if (!Number.isNaN(string)) {
    string = string.toString();
  }

  for (let i = 0; i <= string.length - 1; i++) {
    let char = string[i];
    char = parseInt(char, 10);

    if (!Number.isNaN(char)) {
      result += char;
    }
  }

  return parseInt(result, 10);
}
