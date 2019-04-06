const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

var imageAmount = 40;
const shuffledImageArray = sequentialArray(imageAmount); //shuffle(sequentialArray(imageAmount));


function shuffle(array) {
	var i = array.length,
		j = 0,
		temp;

	while (i--) {

		j = Math.floor(Math.random() * (i + 1));

		// swap randomly chosen element with current element
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

function generateHTML([h, v]) {
	return `
		<div class="item h${h} v${v}" style="grid-row: span ${v};grid-column: span ${h}">
			<img src="../resized_photos/${randomImage()}.jpg">
			<div class="item__overlay">
				<button>View</button>
			</div>
		</div>
	`;
}

function randomNumber(limit) {
	return Math.floor(Math.random() * limit);
}

function sequentialArray(length) {
	var array = [];
	for (let i = 0; i < length + 1; i++) {
		array.push(i);
	}
	return array
}

function randomImage() {
	var pointer = randomNumber(shuffledImageArray.length);
	var value = shuffledImageArray[pointer];
	shuffledImageArray.splice(pointer, 1);
	return value;
}

function createGridArray() {
	const length = 40;
	var gridArray = [];
	for (let i = 0; i < length; i++) {
		constInt = _.sample([6,8,10]);
		gridArray[i] = [2 * constInt, 3 * constInt];
	}
	// console.log(gridArray);
	return gridArray
}

function handleClick(e) {

	overlayImage.src = e.currentTarget.querySelector('img').src;
	overlay.classList.add('open');
}

function close() {
	overlay.classList.remove('open');
}

// const digits = ;
const html = createGridArray().map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close)