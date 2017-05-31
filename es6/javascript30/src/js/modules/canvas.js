//--7.0 - Canvas--------------------------------------------------------------------//

	const canvas = document.querySelector('#draw');
	const context = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	context.strokeStyle = '#BADA55';
	context.lineJoin = 'round';
	context.lineCap = 'round';
	context.lineWidth = 20;

	let isDrawing = false;
	let lastXPos = 0;
	let lastYPos = 0;
	let hue = 0;


	const draw = function(e){
		if(!isDrawing) return;
		context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		context.beginPath();
		context.moveTo(lastXPos, lastYPos);
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();

		[lastXPos, lastYPos] = [e.offsetX, e.offsetY];

		hue++;

		if (hue >= 360){
			hue = 0;
		}
	};

	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true;
		[lastXPos, lastYPos] = [e.offsetX, e.offsetY];
	});
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', () => isDrawing = false);
	canvas.addEventListener('mouseout', () => isDrawing = false);

//----------------------------------------------------------------------------------//