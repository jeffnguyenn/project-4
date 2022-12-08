let name; // initializes name variable

// prompts first time users to enter their full name
if (!localStorage.getItem('fullName')) {
    // continue prompting as long as name variable is null
    while (!name) {
        name = prompt('Welcome to DigiArt! Please enter your full name below.')
    }

    // saves name information within HTML5 web storage database
    localStorage.setItem('fullName', name);

    // splits name and stores first/last names into separate key-value pairs
    name = name.split(' ');
    localStorage.setItem('firstName', name[0]);
    localStorage.setItem('lastName', name[1]);
}

// creates div for welcome message that incorporates user's first and last name
let welcome_div = document.createElement('div');
welcome_div.className = 'col-md-12';

// creates actual header and text that resides within header tag
let welcome_h2 = document.createElement('h2');

// creates and inserts text into the header element
let welcome_h2_text = document.createTextNode(`Welcome, ${localStorage.getItem('fullName')}`);
welcome_h2.appendChild(welcome_h2_text); // adds text to header element
welcome_div.appendChild(welcome_h2); // adds header element to parent div

// inserts welcome banner before the disclaimer statement
let containerBody = document.getElementById('containerBody')
containerBody.insertBefore(welcome_div, containerBody.children[0])

function resetName() {
    // resets the name fields in localStorage for the user
    localStorage.removeItem('fullName');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    location.reload(); // refreshes page, forcing user to enter name
}

// adds functionality to name reset button
document.getElementById('resetName').addEventListener('click', resetName);