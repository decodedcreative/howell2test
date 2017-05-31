export class mouseShadow {

	constructor () {

		this.hero = document.querySelector('.hero');
		this.text = this.hero.querySelector('h1');
		this.hero.addEventListener('mousemove', this.shadow);
		this.walk = 50;
	}

	shadow (e) {
		const { offsetWidth: width, offsetHeight: height } = mouseshadow.hero;
		let { offsetX: x, offsetY: y } = e;

		if (this !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}

		const xWalk = Math.round((x / width * mouseshadow.walk) - (mouseshadow.walk / 2));
		const yWalk = Math.round((y / height * mouseshadow.walk) - (mouseshadow.walk / 2));

		mouseshadow.text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
	}


}

export let mouseshadow = new mouseShadow();