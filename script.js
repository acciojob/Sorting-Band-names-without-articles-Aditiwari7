//your code here
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeA (bandName) {
	let re = /^(?:The|An|A)\s+/i;
	return bandName.replace(re, '');
}

bandNames.sort((a, b) => removeA(a).localeCompare(removeA(b)));

let list = document.getElementById('bands');

for(let name of bandNames){
	let listItem = document.createElement('li');
	listItem.textContent = name;
	list.appendChild(listItem);
}



