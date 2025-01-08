


function countLvClasses() {
    // Use a Set to track unique "lvX" classes
    const lvClasses = new Set();

    // Select all elements in the document
    document.querySelectorAll('*').forEach(element => {
        // Check each class of the current element
        element.classList.forEach(className => {
            if (className.startsWith('lv') && !isNaN(className.substring(2))) {
                lvClasses.add(className);
            }
        });
    });

    let numberOfColumns = lvClasses.size;
    return numberOfColumns;
}


/* Gets an array of every width of a line */
function columnArray(versionColumn) {
    // Select all elements with the class "label"
    const elements = document.querySelectorAll('.label, .nolabel');

    versionColumn = versionColumn - 1;

    // Array to store widths for the specified versionColumn
    let widthArray = [];

    // Iterate over elements to collect widths
    elements.forEach(element => {
        // Get the width of the current element
        const elementOffsetWidth = element.offsetWidth;

        // Get the parent and grandparent of the current element
        const parent = element.parentElement;
        const grandparent = parent.parentElement;

        // Get the second class of the grandparent
        const secondClass = grandparent.className.split(' ')[1];

        // Check if the second class matches "lv" + versionColumn
        if (secondClass === `lv${versionColumn}`) {
            // Add the width to the array
            widthArray.push(elementOffsetWidth);
        }
    });

    // Return the array of widths
    return widthArray;
}

function getBiggestWidth(versionColumn, columnData) {
    // Call the function and store the result
    let allValues = Object.values(columnData).flat();
    const maxNumber = Math.max(...allValues);

    /* Moves the lv(x) to the max width */
    const elements = document.querySelectorAll(`.lv${versionColumn}`);
        // Loop through each element and set its width
        elements.forEach(element => {
        element.style.left = `${maxNumber - 151}px`;
    });

    return maxNumber;
}

function changeColumnBarWidth(columnWidth, versionColumn) {
    // Get the column data (array of widths) for the specified versionColumn
    let columnData = columnArray(versionColumn);  
    let biggestNumber = getBiggestWidth(versionColumn, columnData);
    let currentLabelFromTop = 0;

    
    document.querySelectorAll('.addBar').forEach(addBar => {// Find all elements with the class "addBar"
        
        const parentDiv = addBar.closest('div')?.parentElement;// Navigate up one level to get the parent div


        if (parentDiv) { // Check if the parent exists
            
            const classList = Array.from(parentDiv.classList); // Convert DOMTokenList to an array
            const secondClass = classList[1]; // Second class lv(x)            
            const currentDiv = addBar.closest('div'); // Get the div associated with this addBar

            // If it's a lv(x) and matches the current version column
            if (secondClass === `lv${versionColumn - 1}`) {
                // If the div has a child div
                if (currentDiv.querySelector('div') && columnData[currentLabelFromTop] < biggestNumber) {

                    // Retrieve the corresponding width from columnData
                    const width = (biggestNumber - columnData[currentLabelFromTop]); // Default to columnWidth if undefined
                    const left = (columnData[currentLabelFromTop] - 1); // Example: dynamic left value
                    const span = currentDiv.querySelector('span.label, span.nolabel');

                    if (span) {
                        const spanClasses = Array.from(span.classList); // Convert classList to an array
                        console.log("Classes inside the span:", spanClasses);
                    
                        if (spanClasses.includes('label')) {
                            // Handle case where the span has class 'label'
                            addBar.style.width = `${width}px`;
                            addBar.style.left = `${left}px`;
                            console.log("Span has class 'label'.");
                        } else if (spanClasses.includes('nolabel')) {
                            // Handle case where the span has class 'nolabel'
                            addBar.style.width = `${width + 150}px`; // Example: Adjusted width for 'nolabel'
                            addBar.style.left = `${left - 150}px`; // Example: Adjusted left for 'nolabel'
                            console.log("Span has class 'nolabel'.");
                        }
                    }
                    
                }

                // Increment the label position
                currentLabelFromTop ++;
            }
        }
    });
}


runProgram();
function runProgram(){

    let columnAmount = countLvClasses();
    for (var i = 2; i <= columnAmount; i++) {
        console.log(i);

        
        changeColumnBarWidth(i, i);
    }

}