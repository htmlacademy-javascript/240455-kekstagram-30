import {createPreviews} from './previews.js';
import {showFullImage} from './picture.js';

const picturesBox = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesBox.addEventListener('click', (evt) => {
    const previewElement = evt.target.closest('a.picture');
    if (!previewElement) {
      return;
    }
    evt.preventDefault();

    const previewElementId = previewElement.dataset.previewId;
    const pictureData = pictures.find((picture) => picture.id === +previewElementId);
    showFullImage(pictureData);
  });
  createPreviews(pictures, picturesBox);
};

export {renderGallery};

