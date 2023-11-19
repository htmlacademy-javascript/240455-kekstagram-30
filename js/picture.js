import {isEscapeKey} from './util.js';

const COMMENTS_COUNT_SHOW = 5;

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const commentsListElements = bigPicture.querySelector('.social__comments');
const commentCountElement = bigPicture.querySelector('.social__comment-shown-count');
const totalCommentCountElement = bigPicture.querySelector('.social__comment-total-count');
const commentsLoaderELement = document.querySelector('.comments-loader');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsCountShown = 0;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const newComment = commentElement.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};

const renderComments = () => {
  commentsCountShown += COMMENTS_COUNT_SHOW;

  if (commentsCountShown >= comments.length) {
    commentsLoaderELement.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoaderELement.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentsListElements.innerHTML = '';
  commentsListElements.append(fragment);

  commentCountElement.textContent = commentsCountShown;
  totalCommentCountElement.textContent = comments.length;
};

const onCommentsLoaderClick = () => renderComments();

//Заполнение полной версии картинки данными
const createFullImage = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  return bigPicture;
};

//Закрытие полной версии картинки при нажатии Esc
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullImage();
  }
};

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFullImage();
});

const showFullImage = (pictureData) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  comments = pictureData.comments;
  if (comments.length > 0) {
    renderComments();
  }

  createFullImage(pictureData);
};

//Закрытие полной версии картинки
function closeFullImage () {
  commentsCountShown = 0;
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

commentsLoaderELement.addEventListener('click', onCommentsLoaderClick);

export {showFullImage};
