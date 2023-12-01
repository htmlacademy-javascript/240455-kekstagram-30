import {createPreviews} from './previews.js';
import {showFullImage} from './picture.js';

const picturesBox = document.querySelector('.pictures');
let pictures = [];

const onPictureBoxClick = (evt) => {
  const previewElement = evt.target.closest('a.picture');
  if (!previewElement) {
    return;
  }
  evt.preventDefault();

  const previewElementId = previewElement.dataset.previewId;
  const pictureData = pictures.find((picture) => picture.id === +previewElementId);
  showFullImage(pictureData);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  picturesBox.removeEventListener('click', (onPictureBoxClick));
  picturesBox.addEventListener('click', (onPictureBoxClick));
  createPreviews(pictures, picturesBox);
};

export {renderGallery};

