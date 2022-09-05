// Импортируем библиотеку
import SimpleLightbox from 'simplelightbox';

// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
       <div class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></div>
      `;
    })
    .join('');
}
console.log(createGallery(galleryItems));

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: 0.2,
  navText: ['⇚', '⇛'],
  closeText: '&#10008',
});

console.log('gallery', gallery);
