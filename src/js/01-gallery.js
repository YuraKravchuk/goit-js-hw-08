// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const renderList = (arr, container) => {
  const markup = arr
    .map(
      item =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}" onclick="return false;">
              <img
                class="gallery__image"
                src="${item.preview}" 
                alt="${item.description}"/>
          </a>
      </li>`
    )
    .join('');
  gallery.style.listStyle = 'none';
  container.insertAdjacentHTML('beforeend', markup);
};

renderList(galleryItems, gallery);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
