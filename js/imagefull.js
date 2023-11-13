import {isEscapeKey, isEnterKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const pictureFooter = bigPicture.querySelector('.social__footer');
const commentsContainer = document.querySelector('.social__comments');
const commentsContainerTemplate = commentsContainer.cloneNode(false);
const commentTemplate = commentsContainer.querySelector('.social__comment');
const bigPictureCloseElement = bigPicture.querySelector('#picture-cancel');

//Заполнение полной версии картинки данными
const fillFullImage = ({url, description, likes, comments}) => {
  const bigPictureTemplate = bigPicture.cloneNode(true);
  bigPictureTemplate.querySelector('.big-picture__img img').src = url;
  bigPictureTemplate.querySelector('.likes-count').textContent = likes;
  bigPictureTemplate.querySelector('.social__caption').textContent = description;
  bigPictureTemplate.querySelector('.social__comment-shown-count').textContent = comments.length; //??
  bigPictureTemplate.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureTemplate.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureTemplate.querySelector('.comments-loader').classList.add('hidden');
};

//Добавление комментариев к картинке
const createComments = ({comments}) => {
  commentsContainer.remove();
  comments.forEach(({avatar, name, message}) => {
    const newComment = commentTemplate.cloneNode(true);

    newComment.querySelector('.social__picture').src = avatar;
    newComment.querySelector('.social__picture').alt = name;
    newComment.querySelector('.social__text').textContent = message;
    commentsContainerTemplate.append(newComment);
  });
  pictureFooter.before(commentsContainerTemplate);
};

//Создание полной версии картинки
const createFullImage = (picture) => {
  // pictures.forEach((picture) => {
  fillFullImage(picture);
  //createComments(picture);
  // });
};

//Открытие полной версии картинки
const openFullImage = (preview) => {
  // preview.addEventListener('click', (evt) => {
  // evt.preventDefault();
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  // });
  // createFullImage(picture);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture () {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

bigPictureCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPicture();
  }
});

export {createFullImage};

