// raw AJAX and jQuery animation project features
// retrieve titles and source files upon clicking button on About Us page

let asyncRequest; // initializer for XMLHTTPRequest object

// creates async connection to XML file
function getLinks(url)
{
	try
	{
		asyncRequest = new XMLHttpRequest(); // request object

		// handle request event
		asyncRequest.addEventListener("readystatechange", processLinks, false);
		asyncRequest.open("GET", url, true);
		asyncRequest.send(null);
	}
	catch
	{
		alert("AJAX failed!");
	}
} // end function getLinks

function processLinks()
{
	if (asyncRequest.readyState === 4 &&
		asyncRequest.status === 200 &&
		asyncRequest.responseXML)
	{
		// retrieve collection of each source/documentation file
		let links = asyncRequest.responseXML.getElementsByTagName("source");
		let output = document.getElementById("sourceContainer");
		output.style.display = 'none';

		// create table with fields
		let sourcesTable = document.createElement("table");
		let headRow = document.createElement("tr");
		let nameField = document.createElement("td");
		let linkField = document.createElement("td");
		nameField.style.fontWeight = "bold";
		linkField.style.fontWeight = "bold";
		nameField.textContent = "File Description";
		linkField.textContent = "Source Link";

		// add field nodes to table
		headRow.appendChild(nameField);
		headRow.appendChild(linkField);
		sourcesTable.appendChild(headRow);

		// loop through sources XML collection and add each to the table
		for (let i = 0; i < links.length; i++)
		{
			let link = links.item(i);

			// retrieve name and file location from each link
			let name = link.getElementsByTagName("name").item(0).firstChild.nodeValue;
			let file = link.getElementsByTagName("file").item(0).firstChild.nodeValue;

			// create nodes and set their text to file description and source link
			let row = document.createElement("tr");
			let tdName = document.createElement("td");
			let tdLink = document.createElement("td");
			let tdLinkA = document.createElement("a"); // create "a" tag for href attribute
			tdName.textContent = name;
			tdLinkA.textContent = "[Click here]";
			tdLinkA.setAttribute("href", file);

			// add each node as child to row, then add row to table
			tdLink.appendChild(tdLinkA);
			row.appendChild(tdName);
			row.appendChild(tdLink);
			sourcesTable.appendChild(row);
		}

		// finally, add table to output div container
		output.appendChild(sourcesTable);

		// jQuery animation
		$(output).fadeIn(1500);

		// disable the button after it's been clicked to prevent further requests
		document.getElementById('sourceBtn').disabled = true;
	}
}

// register listener for button
function addListener()
{
	document.getElementById("sourceBtn").addEventListener("click", () => getLinks("sources.xml"));
}

window.addEventListener('load', addListener, false);