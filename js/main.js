const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 30;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;

const NAMES = [
  'Иван',
  'Анатолий',
  'Александр',
  'Мария',
  'Виктория',
  'Юлия',
  'Анжелика',
  'Анастасия',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Красивый вид',
  'Потрясная фотка',
  'Фото делал профи',
  'Горизонт не завален',
];

//получение случайного числа из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//Создание неповторяющегося id
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(1, COMMENTS_COUNT);
const generateCommentAvatar = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const createMessage = () => Array.from(
  { length: getRandomInteger (1, 2)},
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ generateCommentAvatar() }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger (LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: Array.from({length: getRandomInteger (0, COMMENTS_COUNT)}, createComment),
});

const Photos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

Photos();
