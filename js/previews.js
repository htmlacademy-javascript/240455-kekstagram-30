import './imagefull.js';
import {fillFullImage, createComments} from './imagefull.js';
import {isEscapeKey} from './util.js';

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
    const fullImageCloseElement = fullPicture.querySelector('#picture-cancel');

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
    fullImageCloseElement.addEventListener('click', () => {
      closeFullImage(fullPicture);
    });

    //Закрытие полной версии картинки при нажатии Esc
    const onDocumentKeydown = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeFullImage(fullPicture);
      }
    };

    //Открытие полной версии картинки
    function openFullImage () {
      fullPicture.classList.remove('hidden');
      document.body.classList.add('modal-open');

      document.addEventListener('keydown', onDocumentKeydown);
    }

    //Закрытие полной версии картинки
    function closeFullImage () {
      fullPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');

      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });
  picturesBox.append(previewsListFragment);
};

export {createPreviews};
