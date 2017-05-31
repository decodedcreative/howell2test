//--10.0 - Custom Video-------------------------------------------------------------//


export class customVideo {

	constructor() {

		this.player = document.querySelector(".player");
		this.video = this.player.querySelector('.viewer');
		this.progress = this.player.querySelector('.progress');
		this.progressBar = this.player.querySelector('.progress__filled');
		this.toggle = this.player.querySelector('.toggle');
		this.skipButtons = this.player.querySelectorAll('[data-skip]');
		this.ranges = this.player.querySelectorAll('.player__slider');

		this.video.addEventListener('click', this.togglePlay);
		this.video.addEventListener('play', this.updateButton);
		this.video.addEventListener('pause', this.updateButton);
		this.video.addEventListener('timeupdate', this.handleProgress);

		this.toggle.addEventListener('click', this.togglePlay);

		this.skipButtons.forEach(button => button.addEventListener('click', this.skip));
		this.ranges.forEach(range => range.addEventListener('change', this.handleRangeUpdate));
		this.ranges.forEach(range => range.addEventListener('mousemove', this.handleRangeUpdate));

		let mousedown = false;

		this.progress.addEventListener('click', this.userClickedSkip);
		this.progress.addEventListener('mousemove', (e) => mousedown && this.userClickedSkip(e));
		this.progress.addEventListener('mousedown', () => mousedown = true);
		this.progress.addEventListener('mouseup', () => mousedown = false);

	}

	togglePlay () {
		const method = customvideo.video.paused ? 'play' : 'pause';
		customvideo.video[method]();
	}

	updateButton () {
		const icon = this.paused ? '►' : '❚ ❚';
		customvideo.toggle.textContent = icon;
	}

	skip () {
		customvideo.video.currentTime += parseFloat(this.dataset.skip);
	}

	handleRangeUpdate () {
		customvideo.video[this.name] = this.value;
	}

	handleProgress () {
		const percent = (customvideo.video.currentTime / customvideo.video.duration) * 100;

		customvideo.progressBar.style.flexBasis = `${percent}%`;
	}

	userClickedSkip (e) {

		const skipTime = (e.offsetX / customvideo.progress.offsetWidth) * customvideo.video.duration;
		customvideo.video.currentTime = skipTime;

	}


}

export let customvideo = new customVideo();

//----------------------------------------------------------------------------------//