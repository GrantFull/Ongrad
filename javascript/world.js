/* vv Planet Page vv */
function hideMan(className) {
  // Get all elements with the class "time-region"
  var timeRegions = document.querySelectorAll(className);

  // Loop through the elements and replace the class
  for (var i = 0; i < timeRegions.length; i++) {
      // Use timeRegions[i] to access each element
      timeRegions[i].classList.replace('w3-show', 'w3-hide');
  }
}

function showNorthPole(){
  hideMan('.time-region');
  document.getElementById('northpole').classList.replace('w3-hide', 'w3-show');
}

function showFortyFive(){
  hideMan('.time-region');
  document.getElementById('fortyfive').classList.replace('w3-hide', 'w3-show');
}

function showEquator(){
  hideMan('.time-region');
  document.getElementById('equator').classList.replace('w3-hide', 'w3-show');
}
/* ^^ Planet Page ^^ */

/* vv Gods Page vv */
function creatureWiki(id) {

  hideMan('.creature-wiki'); //hides classes with god-art

  var resizeDiv = id;
  resizeDiv.classList.replace('w3-hide', 'w3-show');
}

function openButton() {
  var worldMain = document.getElementById('worldMain');
  var godIndexDiv = document.getElementById('godIndex');
  var arrow = document.getElementById('arrow'); // Assuming 'arrow' is an element ID

  if (godIndexDiv.style.height === '100vh') {
    arrow.innerHTML = "&#9660; Open &#9660;"; // Changes the inside of the div to this text
      worldMain.classList.toggle('size-change');
      godIndexDiv.style.height = '0vh';
  } else {
    arrow.innerHTML = "&#9650; Close &#9650;"; // Changes the inside of the div to this text
      worldMain.classList.toggle('size-change');
      godIndexDiv.style.height = '100vh';
  }
}
/* ^^ Gods Page ^^ */

/* vv World Page vv */
function continent(id) {

  hideMan('.continent'); //hides classes with god-art

  var resizeDiv = id;
  resizeDiv.classList.replace('w3-hide', 'w3-show');
}

/* vv World Page vv */
function hideGods() {

  hideMan('.creature-wiki'); //hides classes with god-art
}

/* vv World Page vv */
function hideSpecies() {

  hideMan('.creature-wiki'); //hides classes with god-art
}

/* ^^ World Page ^^ */

/* vv About Me Page vv */
function author(id) {

  hideMan('.author'); //hides classes with god-art

  var resizeDiv = id;
  resizeDiv.classList.replace('w3-hide', 'w3-show');
}
/* ^^ About Me Page ^^ */


/* vv Image Carrousel vv */
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const carouselId = thumbnail.parentElement.dataset.carousel;
        const carousel = document.querySelector(carouselId + ' .carousel');
        const index = Array.from(thumbnail.parentElement.children).indexOf(thumbnail);
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
});
/* ^^ Image Carrousel ^^ */