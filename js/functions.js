function checkLength (string, maxLength) {
  return string.length <= maxLength;
}

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function isPalindrom(string) {
  string = string.replaceAll(' ','').toLowerCase();
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    const char = string[i];
    newString += char;
  }

  return newString === string;
}

isPalindrom('Лёша на полке клопа нашёл ');

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

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
