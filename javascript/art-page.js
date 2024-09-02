var inclusive = true;
let startHeight = 40;
const namesArray = [];

function loadAllImages() {
  let htmlText = "";
  images.forEach(function(image) {
    htmlText += `<img src="images/characters/${image.src}" style="height:50vh;" loading="lazy" alt="character image" class="w3-hide art-img ${image.characters}">`;
  });
  document.getElementById("image-section").innerHTML = htmlText;
}

// Load all images when the page loads
document.addEventListener("DOMContentLoaded", loadAllImages);


function hideAll(){
// Get all elements with the class "art-img"
const artImgElements = document.querySelectorAll('.art-img');

// Loop through the elements and add the "w3-hide" class only if it's not already present
artImgElements.forEach(element => {
  if (!element.classList.contains('w3-hide')) {
    element.classList.add('w3-hide');
  }
});

}




function inclusiveFunc() {
  hideAll();//hides all images
  document.querySelectorAll('.inclusive').forEach(element => {
    element.classList.toggle('w3-hide'); //UI to show if the option is selected
  });
  
  
  if (inclusive) {
    inclusive = false;
    displayImg();
    
  } else {
    inclusive = true;
    displayImg();
  }
}

function button(id) {
  hideAll(); //hides all images
  const element = document.getElementById(id); //gets the id of the div's button
  element.classList.toggle("on-display");      //if a div has the class "on-display" images with the same class as the div's id will be shown
  element.classList.toggle("w3-light-grey");   //UI to show if the option is selected

  displayImg();
}


    function displayImg(){
      //If the image selection is inclusive, display all images of all of the selected tags
      if (inclusive) {
        const elementsWithClass = document.querySelectorAll('.on-display');

        // Loop through the elements
        elementsWithClass.forEach(element => {
          // Capture the ID as a string
          const id = element.id;
  
          // Call the "processDivId" function with the captured ID
          const matchingDivs = document.querySelectorAll(`.${id}`);
  
          // Loop through the matching divs and add the "w3-black" class
          matchingDivs.forEach(div => {
            div.classList.remove("w3-hide");
          });
        });
      }

      //If the image selection is exclusive, display only images with every selected tag
      else {
        const elementsWithClass = document.querySelectorAll('.on-display');
    
        // Loop through the elements and push their IDs to the namesArray
        elementsWithClass.forEach(element => {
          const id = element.id;
          namesArray.push(id);
        });
        // Get all div elements that contain both 'cole' and 'theo' classes
        const divs = document.querySelectorAll(`${namesArray.map(name => `.${name}`).join('')}`);
      
        // Loop through the divs and remove the "w3-hide" class
        divs.forEach(div => {
            div.classList.remove('w3-hide');
        });
  
        namesArray.splice(0, namesArray.length);
      }

    }


// Function to add 10vh to the height of elements with class "art-img"
function increaseHeight() {
  // Get all elements with the class "art-img"
  const artImgElements = document.querySelectorAll('.art-img');
  startHeight = startHeight + 10; // Add 10vh

  // Loop through the elements and increase their height by 10vh
  artImgElements.forEach(element => {
    element.style.height = startHeight + 'vh'; // Set the new height
  });
}

// Function to add 10vh to the height of elements with class "art-img"
function decreaseHeight() {
  // Get all elements with the class "art-img"
  const artImgElements = document.querySelectorAll('.art-img');
  startHeight = startHeight - 10; // Add 10vh

  // Loop through the elements and increase their height by 10vh
  artImgElements.forEach(element => {
    element.style.height = startHeight + 'vh'; // Set the new height
  });
}