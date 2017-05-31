export class KeyDetector {

	constructor() {

		const pressed = [];

		const secretCode = 'wesbos';

		window.addEventListener('keyup', (e) => {
			console.log(e.key);
			pressed.push(e.key);
			console.log(pressed);
			pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

			if (pressed.join('').includes(secretCode)) {
				cornify_add();
			}
		});

	}

}

export let keydetect = new KeyDetector();