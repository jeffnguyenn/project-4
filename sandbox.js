// start function add mouseOver and mouseOut effects
function addRollovers() {

	// get the collection of the <p> tags
	let pElements = document.getElementsByTagName('p');

	// iterates through array of <p> tags
	for (let i = 0; i < pElements.length; i++) {
		let prev; // stores previous background styling to restore element on mouseOut

		// adds mouseOver styling effects to each <p> tag
		pElements[i].addEventListener('mouseover', function() {
			prev = this.style['background-color'];
			this.style['background-color'] = 'white';
			this.style['font-style'] = 'italic';
		}, false);

		// adds mouseOut styling effects to each <p> tag
		pElements[i].addEventListener('mouseout', function() {
			this.style['background-color'] = prev;
			this.style['font-style'] = '';
		}, false);
	}
} // end function add mouseOver/mouseOut effects

// start function that creates element based on user input
function addElementBtn() {

	// get text input nodes
	let newElTag = document.getElementById('addElement').value;
	let newElTextInput = document.getElementById('elementText').value;
	let newElStyle = document.getElementById('addStyle').value.split('\n'); // create array of styles

	// get output div to append new elements
	let output = document.getElementById('sandboxOutput');

	// instantiate element node and text
	let newEl = document.createElement(newElTag);
	let newElText = document.createTextNode(newElTextInput);

	// apply each style to newly created element
	for (let i = 0; i < newElStyle.length; i++) {
		let style = newElStyle[i].replace(';', '').split(':'); // clean input and split for style attribute
		newEl.style[style[0]] = style[1]; // styles each tag
	}

	// display new element on page
	newEl.appendChild(newElText);
	output.appendChild(newEl);
} // end function that creates element based on user input

// start function that modifies existing elements
function modifyElementBtn() {

	// get text input nodes
	let elTag = document.getElementById('addElement').value;
	let elTextInput = document.getElementById('elementText').value;
	let elStyle = document.getElementById('addStyle').value.split('\n'); // create array of styles

	// get collection of the user-specified tag for modification
	let elTagArr = document.getElementsByTagName(elTag);

	// iterate through collection to update each instance of the tag with user input
	for (let i = 0; i < elTagArr.length; i++) {
		elTagArr[i].textContent = elTextInput; // modifies text of specified tag

		// updates styles of each tag
		for (let j = 0; j < elStyle.length; j++) {
			let style = elStyle[j].replace(';', '').split(':'); // clean input and split for style attribute
			elTagArr[i].style[style[0]] = style[1]; // styles each tag
		}
	}
} // end function that modifies existing elements

// start function that deletes last created element
function deleteElementBtn() {
	let output = document.getElementById('sandboxOutput'); // get output node
	output.removeChild(output.lastChild); // remove last created element
} // end function that deletes last created element

// start section for interval functions/handlers
let growInt;
let shrinkInt;
let fontSize = 32; // default size for h1 header

// start function to animate element growing
function grow() {
	let head = document.getElementById('header');
	head.style['font-size'] = `${fontSize++}px`; // font size increased by 1 every millisecond
} // end function to animate element growing

// start function to set interval of growth animation
function growInterval() {
	growInt = setInterval(grow, 1); // begins grow animation
} // end function to set interval of growth animation

// start function to animate element shrinking
function shrink() {

	// sets threshold for shrinking animation
	if (fontSize >= 32) {
		let head = document.getElementById('header');
		head.style['font-size'] = `${fontSize--}px`; // font size decreased by 1 every millisecond
	}

	// clears interval when min font size is reached
	else {
		clearInterval(shrinkInt);
	}
} // end function to animate element shrinking

// start function to set interval of shrink animation
function shrinkInterval() {
	clearInterval(growInt); // removes growth animation
	shrinkInt = setInterval(shrink, 1); // begins shrink animation
} // end function to set interval of shrink animation

// end section for interval functions/handlers

// start function to add event listeners to buttons and header animation
function addListeners() {
	document.getElementById('add').addEventListener('click', addElementBtn, false);
	document.getElementById('modify').addEventListener('click', modifyElementBtn, false);
	document.getElementById('delete').addEventListener('click', deleteElementBtn, false);
	document.getElementById('addRollover').addEventListener('click', addRollovers, false);
	document.getElementById('header').addEventListener('mouseover', growInterval, false);
	document.getElementById('header').addEventListener('mouseout', shrinkInterval, false);
} // end function to add event listeners to buttons and header animation

window.addEventListener('load', addListeners, false);