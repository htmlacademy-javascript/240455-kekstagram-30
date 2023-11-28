import {renderGallery} from './imagefull.js';
import './form.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filter.js';

async function bootstrap() {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
}

bootstrap();
