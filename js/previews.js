const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const previewsListFragment = document.createDocumentFragment();

const createPreview = ({url, description, likes, comments, id}) => {
  const preview = pictureTemplate.cloneNode(true);
  preview.querySelector('.picture__img').src = url;
  preview.querySelector('.picture__img').alt = description;
  preview.querySelector('.picture__likes').textContent = likes;
  preview.querySelector('.picture__comments').textContent = comments.length;
  preview.dataset.previewId = id;
  return preview;
};

const createPreviews = (pictures, container) => {
  pictures.forEach((picture) => {
    const preview = createPreview(picture); //создано превью
    previewsListFragment.append(preview);
  });
  container.append(previewsListFragment);
};

export {createPreviews};
