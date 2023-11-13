import './imagefull.js';
import {createFullImage} from './imagefull.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBox = document.querySelector('.pictures');

const previewsListFragment = document.createDocumentFragment();

const createPreview = ({url, description, likes, comments}) => {
  const preview = pictureTemplate.cloneNode(true);
  preview.querySelector('.picture__img').src = url;
  preview.querySelector('.picture__img').alt = description;
  preview.querySelector('.picture__likes').textContent = likes;
  preview.querySelector('.picture__comments').textContent = comments.length;
  return preview;
};

const createPreviews = (pictures) => {
  pictures.forEach((picture) => {
    const preview = createPreview(picture);
    const fullPicture = createFullImage(picture);
    console.log(fullPicture);
    preview.append(fullPicture);

    previewsListFragment.append(preview);
  });
  picturesBox.append(previewsListFragment);
};

export {createPreviews};
