export class webCam {

	constructor() {
        this.video = document.querySelector('.player');
        this.canvas = document.querySelector('.photo');
        this.ctx = this.canvas.getContext('2d');
        this.strip = document.querySelector('.strip');
        this.snap = document.querySelector('.snap');

        this.getVideo();
        
        this.video.addEventListener('canplay', this.paintToCanvas);
        document.querySelector('button').addEventListener('click', this.takePhoto);
        //this.paintToCanvas();

	}

    getVideo () {

        console.log("get video");

        navigator.mediaDevices.getUserMedia({ video: true, audio: false})
            .then(localMediaStream => {
                this.video.src = window.URL.createObjectURL(localMediaStream);
                console.log(this.video);
                this.video.play();
            })
            .catch(err => {
                console.error(`OH NO!!!`, err);
            })
    }

    paintToCanvas () {
        
        console.log("paintToCanvas");

        const width = webcam.video.videoWidth;
        const height = webcam.video.videoHeight;
        webcam.canvas.width = width;
        webcam.canvas.height = height;


        return setInterval(() => {

            webcam.ctx.drawImage(webcam.video, 0, 0, width, height);
            // take the pixels out
            let pixels = webcam.ctx.getImageData(0, 0, width, height);
            // mess with them
            //pixels = redEffect(pixels);

            pixels = webcam.rgbSplit(pixels);
            webcam.ctx.globalAlpha = 0.8;

            //pixels = webcam.greenScreen(pixels);
            // put them back
            webcam.ctx.putImageData(pixels, 0, 0);
        }, 16);
    }

    takePhoto() {
      // played the sound
      console.log(webcam);

      webcam.snap.currentTime = 0;
      webcam.snap.play();

      // take the data out of the canvas
      const data = webcam.canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = data;
      link.setAttribute('download', 'handsome');
      link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
      webcam.strip.insertBefore(link, webcam.strip.firstChild);
    }

    rgbSplit(pixels) {
      for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
      }
      return pixels;
    }

    redEffect(pixels) {
        for(let i = 0; i < pixels.data.length; i+=4) {
            pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
            pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
        }
        return pixels;
    }

    greenScreen(pixels) {
      const levels = {};

      document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
      });

      for (let i = 0; i < pixels.data.length; i = i + 4) {
        const red = pixels.data[i + 0];
        const green = pixels.data[i + 1];
        const blue = pixels.data[i + 2];
        const alpha = pixels.data[i + 3];

        if (red >= levels.rmin
          && green >= levels.gmin
          && blue >= levels.bmin
          && red <= levels.rmax
          && green <= levels.gmax
          && blue <= levels.bmax) {

          // take it out!
          pixels.data[i + 3] = 0;
        }
      }

      return pixels;
    }


}

export let webcam = new webCam();