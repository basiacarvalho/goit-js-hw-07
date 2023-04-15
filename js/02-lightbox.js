import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItems() {
  const items = [];
  for (const item of galleryItems) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('gallery__item');
    link.href = item.original;
    const img = document.createElement('img');
    img.src = item.preview;
    img.alt = item.description;
    img.title = item.description;
    img.dataset.originalPicture = item.original;
    img.classList.add('gallery__image');
    li.append(link);
    link.append(img);
    items.push(li);
  }
  document.querySelector('.gallery').append(...items);
}

createGalleryItems();
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
