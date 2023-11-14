import './imagefull.js';
import {fillFullImage, createComments, openFullImage, closeBigPicture} from './imagefull.js';

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
    const preview = createPreview(picture); //создано превью
    const fullPicture = fillFullImage(picture); //создана полная версия картинки
    const comments = createComments(picture); //созданы комментарии
    const main = document.querySelector('main');
    const fullPictureCloseElement = fullPicture.querySelector('#picture-cancel');

    if (picture.comments.length > 0) {
      const commentsLoader = fullPicture.querySelector('.social__comments-loader');
      commentsLoader.insertAdjacentElement('afterend', comments);
    }

    main.append(fullPicture);
    previewsListFragment.append(preview);

    //открытие полноразмерной картинки
    preview.addEventListener('click', (evt) => {
      evt.preventDefault();
      openFullImage(fullPicture);
    });

    //закрытие полноразмерной картинки
    fullPictureCloseElement.addEventListener('click', () => {
      closeBigPicture(fullPicture);
    });
  });
  picturesBox.append(previewsListFragment);
};

export {createPreviews};
