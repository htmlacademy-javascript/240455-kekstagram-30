import { renderGallery } from './imagefull.js';
import { debounce } from './util.js';

const filtersEl = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const defaultBtn = filtersForm.querySelector('#filter-default');
const randomBtn = filtersForm.querySelector('#filter-random');
const discussedBtn = filtersForm.querySelector('#filter-discussed');

const MAX_RANDOM_FILTER = 10;

const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,
  [FilterEnum.RANDOM]: (data) => [...data].sort(() => 0.5 - Math.random()).slice(0, MAX_RANDOM_FILTER),
  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length),
};

const repaint = (evt, filter, data) => {
  const filteredData = filterHandlers[filter](data);
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
  renderGallery(filteredData);
  const currentActiveEl = filtersForm.querySelector('.img-filters__button--active');
  currentActiveEl.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const debouncedRepaint = debounce(repaint);

export const initFilter = (data) => {
  filtersEl.classList.remove('img-filters--inactive');
  defaultBtn.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FilterEnum.DEFAULT, data);
  });
  randomBtn.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FilterEnum.RANDOM, data);
  });
  discussedBtn.addEventListener('click', (evt) => {
    debouncedRepaint(evt, FilterEnum.DISCUSSED, data);
  });
};
