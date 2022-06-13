// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link"  href="${original}">
                <img class="gallery__image" src="${preview}" title="${description}" />
            </a>
        </div>`
    }).join('');
};

const galleryItem = onCreateGalleryItem(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItem);

gallery.addEventListener('click', onGalleryItemClick);


new SimpleLightbox('.gallery a', { captions: true,
    captionData:'title', captionDelay:250
});

function onGalleryItemClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
}

console.log(galleryItems);

const a = 5;
console.log(a);