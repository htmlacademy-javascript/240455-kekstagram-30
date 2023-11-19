import {createPreviews} from './previews.js';
import {showFullImage} from './picture.js';

const picturesBox = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesBox.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.matches('.picture__img')) {
      evt.preventDefault();

      const previewElement = evt.target.closest('.picture');

      const previewElementId = previewElement.dataset.previewId;
      const pictureData = pictures.find((picture) => picture.id === +previewElementId);
      showFullImage(pictureData);
    }
  });
  createPreviews(pictures, picturesBox);
};

export {renderGallery};

