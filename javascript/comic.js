

function comicHover(fullStory) {
    console.log("Testing: " + fullStory);
    let firstLetter = fullStory.charAt(0);
    let selectedStory = fullStory.substring(1);
    
    if (firstLetter == 'A') {
        document.getElementById(selectedStory + "-hover").classList.replace("comic-hide", "comic-show");
    } else if (firstLetter == 'B') {
        document.getElementById(selectedStory + "-hover").classList.replace("comic-show", "comic-hide");
    } else if (firstLetter == 'C') {
        if (document.getElementById(selectedStory + "-click").classList.contains("comic-show")){
            document.querySelectorAll(".comic-click").forEach(el => el.classList.replace("comic-show", "comic-hide"));
        } else {
            document.querySelectorAll(".comic-click").forEach(el => el.classList.replace("comic-show", "comic-hide"));
            document.getElementById(selectedStory + "-click").classList.replace("comic-hide", "comic-show");
        }
    } else {
        console.log("IDK Machine Broke");
    }
}


/* 
if input is A (make load hover id visible)
if B hide load hover

if C
    hide all then
    load with the same id minus first character


*/