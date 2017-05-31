export class tallyData {

	constructor() {

        this.timeNodes = Array.from(document.querySelectorAll('[data-time]'));

        this.seconds = this.timeNodes
            .map(node => node.dataset.time)
            .map(timeCode => {
                const [mins, secs] = timeCode.split(':').map(parseFloat);
                return (mins * 60) + secs;
            }).reduce((total, vidSeconds) => total + vidSeconds);

        console.log(this.seconds);

        this.secondsLeft = this.seconds;
        this.hours = Math.floor(this.secondsLeft / 3600);
        this.secondsLeft = this.secondsLeft % 3600;
        this.mins = Math.floor(this.secondsLeft / 60);
        this.secondsLeft = this.secondsLeft % 60;

        console.log(this.hours, this.mins, this.secondsLeft);

	}




}

export let tallydata = new tallyData();