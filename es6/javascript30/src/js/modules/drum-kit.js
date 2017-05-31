export class DrumKit {

	constructor() {
		const keys = document.querySelectorAll(".key");
		keys.forEach(key => key.addEventListener("transitionend", this.removeTransition));
		window.addEventListener("keydown", this.playSound);
	}

	removeTransition(e) {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	}

	playSound(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

		if ( !audio ){
			return;
		}

		audio.currentTime = 0;
		audio.play();
		key.classList.add("playing");
	}

}

export let drumkit = new DrumKit();