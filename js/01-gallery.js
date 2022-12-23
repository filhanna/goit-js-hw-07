import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryIconsMarcup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
console.log(createGalleryIconsMarcup(galleryItems));

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryIconsMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  console.log(evt.target);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const galleryOriginalImg = evt.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `<img src = '${galleryOriginalImg}' width='800', height='600'>`
  );
  instance.show();
}
