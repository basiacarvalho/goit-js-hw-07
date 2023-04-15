import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItems() {
  const items = [];
  for (const item of galleryItems) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;
    const img = document.createElement('img');
    img.src = item.preview;
    img.alt = item.description;
    img.dataset.originalPicture = item.original;
    img.classList.add('gallery__image');
    li.append(link);
    link.append(img);
    items.push(li);
  }
  document.querySelector('.gallery').append(...items);
}

createGalleryItems();

const gallery = document.querySelector('.gallery');

let instance;

function closeModal(event) {
  if (event.code !== 'Escape') {
    return;
  }
  instance.close();
}

function showPicture(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.originalPicture}" alt="${event.target.alt}">
`);

  document.addEventListener('keydown', closeModal);
  instance.show();
}

gallery.addEventListener('click', showPicture);
