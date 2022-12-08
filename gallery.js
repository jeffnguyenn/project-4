let brush_arr = ['paintbrush1.png', 'paintbrush2.png', 'paintbrush3.png', 'paintbrush4.png']

function randomImgOnLoad() {
    // generates random int between 0 and 3 (inclusive)
    let result = Math.floor(Math.random() * 4);

    // updates image source on page to reflect result number
    document.getElementById('artBrush').src = brush_arr[result];
}

function randomImg() {
    // generates random int between 0 and 3 (inclusive)
    let result = Math.floor(Math.random() * 4);

    // updates image source on page to reflect result number
    document.getElementById('artBrush').src = brush_arr[result];

    // increments flip counter and updates text label
    let flipCount = document.getElementById('flipCount');
    flipCount.textContent = String(parseInt(flipCount.textContent) + 1);

    if (result === 0) {
        // inserts winning button onto page
        let winBtn = document.createElement('input'); // creates tag

        // grabs the proper parent element that the button will be inserted into
        let btnPosition = document.getElementById('containerBody').children[0].children[4]

        // set attributes for the button
        winBtn.type = 'button'
        winBtn.id = 'winBtn';
        winBtn.name = 'winBtn';
        winBtn.value = 'You Win! Click here for your prize.';

        // inserts winner button above art brush image
        btnPosition.insertBefore(winBtn, btnPosition.children[5]);

        // event listener that adds open window functionality to button
        winBtn.addEventListener('click', openWindow);
        document.getElementById('flipBrush').disabled = true;
    }
}

function openWindow() {
    // opens new window and inserts content into the new window
    let newWindow = window.open('', 'winner', 'menubar=yes, toolbar=yes, height=425, width=525')
    newWindow.document.writeln('<img src="trophy.jpg" alt="winner trophy" height="400" width="500">')
}

function insertLastModifiedDate() {
    // gets element that will show last modified date label
    let dateElmnt = document.getElementById('lastModified');
    // updates the text to show the last modified date
    dateElmnt.textContent = document.lastModified;
}

window.addEventListener('load', randomImgOnLoad);
window.addEventListener('load', insertLastModifiedDate);
document.getElementById('flipBrush').addEventListener('click', randomImg);
