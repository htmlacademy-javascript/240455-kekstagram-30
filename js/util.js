// проверка длины
function checkLength (string, maxLength) {
  return string.length <= maxLength;
}

checkLength('проверяемая строка', 20);

//проверка на палиндром
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

//извлечение чисел из строки
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

//получение случайного числа из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//Создание счетчика
const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

//Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Проверка нажатия клавиши Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export {createIdGenerator, getRandomArrayElement, getRandomInteger, isEscapeKey};
