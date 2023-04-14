import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
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

  galleryEl.addEventListener('click', onClickImg);
  
  function onClickImg(event){
    event.preventDefault();

    if(event.target.classList.value !== "gallery__image"){
        return;
    }

    const instance = basicLightbox.create
    (`<img src="${event.target.dataset.source}" width="1280" height="600">`);
    instance.show();

    window.addEventListener('keydown', event =>{
        if(event.code === 'Escape'){
            instance.close();
        }
    });
}

console.log(galleryItems);
