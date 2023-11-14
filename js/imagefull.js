import {isEscapeKey, isEnterKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
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
  return bigPictureTemplate;
};

//Добавление комментариев
const commentsContainer = document.querySelector('.social__comments'); //блок комментариев
const commentTemplate = commentsContainer.querySelector('.social__comment'); //комментарий

const createComments = ({comments}) => {
  const commentsContainerClone = commentsContainer.cloneNode(false);
  comments.forEach(({avatar, name, message}) => {
    const commentTemplateClone = commentTemplate.cloneNode(true);
    commentTemplateClone.querySelector('.social__picture').src = avatar;
    commentTemplateClone.querySelector('.social__picture').alt = name;
    commentTemplateClone.querySelector('.social__text').textContent = message;
    commentsContainerClone.append(commentTemplateClone);
  });
  return commentsContainerClone;
};
commentsContainer.remove(); //удаление заверстанного блока с комментариями
bigPicture.remove(); //удалена заверстанная полноэкранная картинка

//Открытие полной версии картинки
const openFullImage = (fullPicture) => {
  fullPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

//Закрытие полной версии картинки
function closeBigPicture (fullPicture) {
  document.body.classList.remove('modal-open');
  fullPicture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPicture();
  }
});

export {fillFullImage, createComments, openFullImage, closeBigPicture};

