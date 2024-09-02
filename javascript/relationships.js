// Select all elements with the class "box"
const boxElements = document.querySelectorAll(".box");

// Attach drag and drop event listeners to each "box" element
boxElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  elem.addEventListener("dragend", dragEnd);
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

// Drag and Drop Functions

// Called when a drag operation starts
function dragStart(event) {
  event.target.classList.add("drag-start");
  event.dataTransfer.setData("text", event.target.id);
}

// Called when a drag operation ends
function dragEnd(event) {
  event.target.classList.remove("drag-start");
}

// Called when a draggable element enters a drop target
function dragEnter(event) {
  if (!event.target.classList.contains("drag-start")) {
    event.target.classList.add("drag-enter");
  }
}

// Called when a draggable element is dragged over a drop target
function dragOver(event) {
  event.preventDefault();
}

// Called when a draggable element leaves a drop target
function dragLeave(event) {
  event.target.classList.remove("drag-enter");
}

// Called when a draggable element is dropped onto a drop target
function drop(event) {
  event.preventDefault();
  event.target.classList.remove("drag-enter");
  const draggableElementId = event.dataTransfer.getData("text");
  const droppableElementId = event.target.id;

  // Swap the image sources
  if (draggableElementId !== droppableElementId) {
    const draggableElement = document.getElementById(draggableElementId);
    const draggableImgSrc = draggableElement.querySelector("img").src;
    const droppableImgSrc = event.target.querySelector("img").src;
    event.target.querySelector("img").src = draggableImgSrc;
    draggableElement.querySelector("img").src = droppableImgSrc;

    event.target.id = draggableElementId;
    draggableElement.id = droppableElementId;
  }

  primary();
}

/* 
Once it gets dropped, run function primary(primary-oc);
  primary = primary-oc
read the secondary div ('cole');
  secondary = secondary-oc

make string openText = '.' + primary-oc + '2' + secondary-oc;

run function changetext(openText)
*/


// Change text for elements with class 'relation-text'
function changeText(opentext) {
  const elements = document.getElementsByClassName('relation-text');
  const elementsArray = Array.from(elements);

  for (let i = 0; i < elementsArray.length; i++) {
    const element = elementsArray[i];

    if (element.classList.contains('w3-show')) {
      element.classList.replace("w3-show", "w3-hide");
    }
  }

  const displaytext = document.querySelectorAll(opentext);
  displaytext.forEach(elem => {
    elem.classList.replace("w3-hide", "w3-show");
  });
}



// Primary function selects who is in the primary box
function primary() {

  // Get the div element with id "primary"
  const primaryDiv = document.getElementById("primary");

  const nestedDiv = primaryDiv ? primaryDiv.querySelector("div") : null;
  const primaryID = nestedDiv ? nestedDiv.id : null;

  if (primaryID) {
    console.log("Primary: " + primaryID);
  } else {
    console.log("No nested div with an id found within the 'primary' div.");
  }

  const secondaryID = secondary();
  const bothIDs = '.' + (primaryID || "") + '2' + (secondaryID || "");
  console.log("Final Bout: " + bothIDs);

  changeText(bothIDs);
}

function secondary() {
  const secondaryDiv = document.getElementById("secondary");

  const nestedDiv = secondaryDiv ? secondaryDiv.querySelector("div") : null;
  const secondaryID = nestedDiv ? nestedDiv.id : null;

  if (secondaryID) {
    console.log("Secondary ID: " + secondaryID);
  } 
  return secondaryID;
}