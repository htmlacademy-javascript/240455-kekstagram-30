import './util.js';
import {Photos} from './data.js';
import {createPreviews} from './previews.js';

const pictures = Photos();
createPreviews(pictures); //const previews

// previews.forEach((preview) => {
//   preview.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     openFullImage(preview);
//   });
// });


