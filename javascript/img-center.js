window.addEventListener('load', function() {
  // Get all pairs of center-left and center-right divs
  const leftDivs = document.querySelectorAll('.center-left');
  const rightDivs = document.querySelectorAll('.center-right');

  // Loop through each pair
  for (let i = 0; i < leftDivs.length; i++) {
      const leftDiv = leftDivs[i];
      const rightDiv = rightDivs[i];

      // Get the heights of the left and right divs
      const leftHeight = leftDiv.offsetHeight;
      const rightHeight = rightDiv.offsetHeight;

      // Calculate the difference in height
      const heightDifference = Math.abs(leftHeight - rightHeight);

      // If the left div is shorter
      if (leftHeight < rightHeight) {
          leftDiv.style.marginTop = `${heightDifference / 2}px`;
          leftDiv.style.marginBottom = `${heightDifference / 2}px`;
      } 
      // If the right div is shorter
      else if (rightHeight < leftHeight) {
          rightDiv.style.marginTop = `${heightDifference / 2}px`;
          rightDiv.style.marginBottom = `${heightDifference / 2}px`;
      }
  }
});
