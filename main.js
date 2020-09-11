var keys = []

function pressKey(key) {
	document.querySelector('#success').style.visibility = 'hidden';
	document.querySelector('#fail').style.visibility = 'hidden';

	const pin = ["1", "2", "3", "4"];

	keys.push(key)

	document.querySelector('#input').textContent = keys.join('');

	if (keys.length === 4) {
		if (keys.join('') === pin.join('')) {
			document.querySelector('#success').style.visibility = 'visible';
		} else {
			document.querySelector('#fail').style.visibility = 'visible';
		}

		keys = []
	}
}
