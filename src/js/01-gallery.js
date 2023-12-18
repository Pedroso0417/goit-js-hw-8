// 01-gallery.js

// Import SimpleLightbox library
import SimpleLightbox from 'simplelightbox';

// Import SimpleLightbox styles
import 'simplelightbox/dist/simple-lightbox.min.css';

// Import gallery items
import { galleryItems } from './gallery-items.js';

// Select the gallery element
const galleryList = document.querySelector('.gallery');

// Function to create the gallery HTML
const createGallery = elements => {
  return elements
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </li>
      `;
    })
    .join('');
};

// Generate HTML markup for the gallery
const photosMarkup = createGallery(galleryItems);

// Insert the gallery markup into the DOM
galleryList.insertAdjacentHTML('beforeend', photosMarkup);

// Initialize SimpleLightbox on the gallery links
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
