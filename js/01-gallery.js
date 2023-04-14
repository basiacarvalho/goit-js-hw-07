import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItems() {
  const items = [];
  for (const item of galleryItems) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    const img = document.createElement('img');
    img.src = item.preview;
    img.alt = item.description;
    img.dataset.originalPicture = item.original;
    img.classList.add('gallery__image');
    li.append(img);
    items.push(li);
  }
  document.querySelector('.gallery').append(...items);
}

console.log(galleryItems);
createGalleryItems();

const gallery = document.querySelector('.gallery');

function showPicture(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.originalPicture}" alt="${event.target.alt}">
`);

  instance.show();
}

gallery.addEventListener('click', showPicture);
