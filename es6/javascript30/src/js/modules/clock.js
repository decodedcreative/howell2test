export class Clock {

	constructor() {
		this.secondHand = document.querySelector('.second-hand');
		this.minsHand = document.querySelector('.min-hand');
		this.hourHand = document.querySelector('.hour-hand');


		setInterval(this.setDate, 1000);
		this.setDate();
	}

	setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;
		const mins = now.getMinutes();
		const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

		console.log(this);

		//Remove transition if last second
		if (seconds===59) {
			clock.secondHand.classList.add("hand-noanimation");
			clock.minHand.classList.add("hand-noanimation");
			clock.hourHand.classList.add("hand-noanimation");
		}
		//Add animation after second 1'
		if (seconds===1){
			clock.secondHand.classList.remove("hand-noanimation");
			clock.minHand.classList.remove("hand-noanimation");
			clock.hourHand.classList.remove("hand-noanimation");
		}


		clock.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

		clock.minsHand.style.transform = `rotate(${minsDegrees}deg)`;

		clock.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	}

}

export let clock = new Clock();