/* vv Country Section vv */
function loadCountry(countryName) {
  console.log(countryName);

  //Loops through the array until the array name matches with the countryName
  for (let i = 0; i < countryArray.length; i++) {
    if (countryArray[i].name === countryName) {
      brat(countryArray[i]);
      break;
    }
  } 

}

function brat(countryArray) {
    const htmlContent = `
        <div class="continent w3-row w3-show">
            <h2 style="margin-left:26%"><u>${countryArray.name}</u></h2>
            <div class="w3-quarter w3-padding"><img src="../images/${countryArray.src}.jpg" style="width:100%" loading="lazy" alt="continent"></div>
            <p class="w3-threequarter">${countryArray.paragraph}</p>
        </div>
    `;
    
    // Append the new content to the div
    document.getElementById("countries").innerHTML = htmlContent;
}
/* ^^ Country Section ^^ */

/* vv God Wiki Section vv */
function loadGod(godName) {
  //creates a DOM with all the divs with godList then replaces and shown ones with hidden ones
  var godListDOMs = document.querySelectorAll('.godList');
  godListDOMs.forEach(function(div) {div.classList.replace('w3-show', 'w3-hide')});

  //shows the specific ones with the same godName
  var selectedGod = document.querySelectorAll('.' + godName);
  selectedGod.forEach(function(div) {div.classList.replace('w3-hide', 'w3-show')}  );
}
/* ^^ God Wiki Section ^^ */