const images = ["0.jpg", "1.jpg", "3.jfif"];
const chosenImage =  images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImage})`
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);