import {Photos} from './data.js';

const pictureTemplate = document.querySelector('#picture');
const picture = pictureTemplate.content.querySelector('.picture');
const picturesBox = document.querySelector('.pictures');
const photosElements = Photos();

const photosListFragment = document.createDocumentFragment();

photosElements.forEach((photo) => {
  const photoElement = picture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

  photosListFragment.appendChild(photoElement);
});

picturesBox.appendChild(photosListFragment);
