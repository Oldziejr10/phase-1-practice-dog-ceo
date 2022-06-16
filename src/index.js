console.log('%c HI', 'color: firebrick')


function addDog() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(json => renderImage(json));

}

function renderImage(images) {
    const loc = document.querySelector('div')
  images.message.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    loc.appendChild(img)
  });
}



document.addEventListener('DOMContentLoaded', () => {
    addDog()
  })