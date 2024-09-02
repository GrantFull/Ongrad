

/* 
get int for amount of ../
loop through int, adding ../ for each
*/

window.onload = function loadNav() {
// Check if the last segment ends with '.html' and log it   

    const folderDepth = document.getElementById('main-nav').getAttribute('data-folderDepth');
    let directory ='';
    
    for (let i = 0; i < folderDepth; i++) {
        directory += '../';
    }

    console.log("Directiroy: " + directory)

    //Gets the name of the file
    const pathname = window.location.pathname;
    console.log("Pathname: " + pathname);
    const segments = pathname.split('/');
    console.log("Segment: " + segments);
    const lastSegment = segments[segments.length - 1- folderDepth];
    console.log('Last .html file:', lastSegment);

    const htmlContent = `
        <img src="${directory}images/pinklight.gif" alt="line break image" style=" position: absolute; top: 0; left: 0;">
        <img src="${directory}images/pinklight.gif" alt="line break image" style="position: absolute; top: 0; right: 0; transform:scaleX(-1);">
            <div      id="world-nav" class="top-nav"><a href="${directory}world.html"><h1>World</h1></a></div>
            <div id="characters-nav" class="top-nav"><a href="${directory}characters.html"><h1>Characters</h1></a></div>
            <div       id="home-nav" class="top-nav"><a href="${directory}home.html"><h1>Home</h1></a></div>
            <div        id="art-nav" class="top-nav"><a href="${directory}art.html"><h1>Art</h1></a></div>
            <div      id="comic-nav" class="top-nav"><a href="${directory}comic.html"><h1>Comics</h1></a></div>
    `;
    // Append the new content to the div
    document.getElementById("main-nav").innerHTML = htmlContent;



    if (lastSegment == 'world' || lastSegment == 'world.html') {
        document.getElementById("world-nav").classList.add('selected-box');
        document.getElementById("main-nav").innerHTML += '<div class="selected-nav" style="margin-left:10%;"><p></p></div>';
    } else if (lastSegment == 'characters' || lastSegment == 'characters.html') {
        document.getElementById("characters-nav").classList.add('selected-box');
        document.getElementById("main-nav").innerHTML += '<div class="selected-nav" style="margin-left:29.3%;"><p></p></div>';
    } else if (lastSegment == 'home' || lastSegment == 'home.html') {
        document.getElementById("home-nav").classList.add('selected-box');
        document.getElementById("main-nav").innerHTML += '<div class="selected-nav" style="margin-left:48.5%;"><p></p></div>';
    } else if (lastSegment == 'art' || lastSegment == 'art.html') {
        document.getElementById("art-nav").classList.add('selected-box');
        document.getElementById("main-nav").innerHTML += '<div class="selected-nav" style="margin-left:67.3%;"><p></p></div>';
    } else if (lastSegment == 'comic' || lastSegment == 'comic.html') {
        document.getElementById("comic-nav").classList.add('selected-box');
        document.getElementById("main-nav").innerHTML += '<div class="selected-nav" style="margin-left:86.4%;"><p></p></div>';
    }

}