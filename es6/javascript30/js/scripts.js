(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var webCam = exports.webCam = function () {
    function webCam() {
        _classCallCheck(this, webCam);

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

    _createClass(webCam, [{
        key: 'getVideo',
        value: function getVideo() {
            var _this = this;

            console.log("get video");

            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (localMediaStream) {
                _this.video.src = window.URL.createObjectURL(localMediaStream);
                console.log(_this.video);
                _this.video.play();
            }).catch(function (err) {
                console.error('OH NO!!!', err);
            });
        }
    }, {
        key: 'paintToCanvas',
        value: function paintToCanvas() {

            console.log("paintToCanvas");

            var width = webcam.video.videoWidth;
            var height = webcam.video.videoHeight;
            webcam.canvas.width = width;
            webcam.canvas.height = height;

            return setInterval(function () {

                webcam.ctx.drawImage(webcam.video, 0, 0, width, height);
                // take the pixels out
                var pixels = webcam.ctx.getImageData(0, 0, width, height);
                // mess with them
                //pixels = redEffect(pixels);

                pixels = webcam.rgbSplit(pixels);
                webcam.ctx.globalAlpha = 0.8;

                //pixels = webcam.greenScreen(pixels);
                // put them back
                webcam.ctx.putImageData(pixels, 0, 0);
            }, 16);
        }
    }, {
        key: 'takePhoto',
        value: function takePhoto() {
            // played the sound
            console.log(webcam);

            webcam.snap.currentTime = 0;
            webcam.snap.play();

            // take the data out of the canvas
            var data = webcam.canvas.toDataURL('image/jpeg');
            var link = document.createElement('a');
            link.href = data;
            link.setAttribute('download', 'handsome');
            link.innerHTML = '<img src="' + data + '" alt="Handsome Man" />';
            webcam.strip.insertBefore(link, webcam.strip.firstChild);
        }
    }, {
        key: 'rgbSplit',
        value: function rgbSplit(pixels) {
            for (var i = 0; i < pixels.data.length; i += 4) {
                pixels.data[i - 150] = pixels.data[i + 0]; // RED
                pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
                pixels.data[i - 550] = pixels.data[i + 2]; // Blue
            }
            return pixels;
        }
    }, {
        key: 'redEffect',
        value: function redEffect(pixels) {
            for (var i = 0; i < pixels.data.length; i += 4) {
                pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
                pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
                pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
            }
            return pixels;
        }
    }, {
        key: 'greenScreen',
        value: function greenScreen(pixels) {
            var levels = {};

            document.querySelectorAll('.rgb input').forEach(function (input) {
                levels[input.name] = input.value;
            });

            for (var i = 0; i < pixels.data.length; i = i + 4) {
                var red = pixels.data[i + 0];
                var green = pixels.data[i + 1];
                var blue = pixels.data[i + 2];
                var alpha = pixels.data[i + 3];

                if (red >= levels.rmin && green >= levels.gmin && blue >= levels.bmin && red <= levels.rmax && green <= levels.gmax && blue <= levels.bmax) {

                    // take it out!
                    pixels.data[i + 3] = 0;
                }
            }

            return pixels;
        }
    }]);

    return webCam;
}();

var webcam = exports.webcam = new webCam();

},{}],2:[function(require,module,exports){
"use strict";

var _webcam = require("./modules/webcam.js");

},{"./modules/webcam.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy93ZWJjYW0uanMiLCJzcmMvanMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQ0FhLGlCLEFBQUEscUJBRVo7c0JBQWM7OEJBQ1A7O2FBQUEsQUFBSyxRQUFRLFNBQUEsQUFBUyxjQUF0QixBQUFhLEFBQXVCLEFBQ3BDO2FBQUEsQUFBSyxTQUFTLFNBQUEsQUFBUyxjQUF2QixBQUFjLEFBQXVCLEFBQ3JDO2FBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxPQUFMLEFBQVksV0FBdkIsQUFBVyxBQUF1QixBQUNsQzthQUFBLEFBQUssUUFBUSxTQUFBLEFBQVMsY0FBdEIsQUFBYSxBQUF1QixBQUNwQzthQUFBLEFBQUssT0FBTyxTQUFBLEFBQVMsY0FBckIsQUFBWSxBQUF1QixBQUVuQzs7YUFBQSxBQUFLLEFBRUw7O2FBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsV0FBVyxLQUF2QyxBQUE0QyxBQUM1QztpQkFBQSxBQUFTLGNBQVQsQUFBdUIsVUFBdkIsQUFBaUMsaUJBQWpDLEFBQWtELFNBQVMsS0FBM0QsQUFBZ0UsQUFDaEU7QUFFTjs7Ozs7bUNBRWM7d0JBRVI7O29CQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O3NCQUFBLEFBQVUsYUFBVixBQUF1QixhQUFhLEVBQUUsT0FBRixBQUFTLE1BQU0sT0FBbkQsQUFBb0MsQUFBc0IsU0FBMUQsQUFDSyxLQUFLLDRCQUFvQixBQUN0QjtzQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE9BQUEsQUFBTyxJQUFQLEFBQVcsZ0JBQTVCLEFBQWlCLEFBQTJCLEFBQzVDO3dCQUFBLEFBQVEsSUFBSSxNQUFaLEFBQWlCLEFBQ2pCO3NCQUFBLEFBQUssTUFBTCxBQUFXLEFBQ2Q7QUFMTCxlQUFBLEFBTUss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QUFOLEFBQWUsQUFFZjs7cUJBQUEsQUFBUyxpQkFBVCxBQUEwQixjQUExQixBQUF3QyxRQUFRLFVBQUEsQUFBQyxPQUFVLEFBQ3pEO3VCQUFPLE1BQVAsQUFBYSxRQUFRLE1BQXJCLEFBQTJCLEFBQzVCO0FBRkQsQUFJQTs7aUJBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFJLE9BQUEsQUFBTyxLQUEzQixBQUFnQyxRQUFRLElBQUksSUFBNUMsQUFBZ0QsR0FBRyxBQUNqRDtvQkFBTSxNQUFNLE9BQUEsQUFBTyxLQUFLLElBQXhCLEFBQVksQUFBZ0IsQUFDNUI7b0JBQU0sUUFBUSxPQUFBLEFBQU8sS0FBSyxJQUExQixBQUFjLEFBQWdCLEFBQzlCO29CQUFNLE9BQU8sT0FBQSxBQUFPLEtBQUssSUFBekIsQUFBYSxBQUFnQixBQUM3QjtvQkFBTSxRQUFRLE9BQUEsQUFBTyxLQUFLLElBQTFCLEFBQWMsQUFBZ0IsQUFFOUI7O29CQUFJLE9BQU8sT0FBUCxBQUFjLFFBQ2IsU0FBUyxPQURWLEFBQ2lCLFFBQ2hCLFFBQVEsT0FGVCxBQUVnQixRQUNmLE9BQU8sT0FIUixBQUdlLFFBQ2QsU0FBUyxPQUpWLEFBSWlCLFFBQ2hCLFFBQVEsT0FMYixBQUtvQixNQUFNLEFBRXhCOztBQUNBOzJCQUFBLEFBQU8sS0FBSyxJQUFaLEFBQWdCLEtBQWhCLEFBQXFCLEFBQ3RCO0FBQ0Y7QUFFRDs7bUJBQUEsQUFBTyxBQUNSOzs7Ozs7O0FBS0UsSUFBSSwwQkFBUyxJQUFiLEFBQWEsQUFBSTs7Ozs7QUNqSHhCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyB3ZWJDYW0ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcicpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90bycpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuc3RyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyaXAnKTtcbiAgICAgICAgdGhpcy5zbmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNuYXAnKTtcblxuICAgICAgICB0aGlzLmdldFZpZGVvKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLnBhaW50VG9DYW52YXMpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudGFrZVBob3RvKTtcbiAgICAgICAgLy90aGlzLnBhaW50VG9DYW52YXMoKTtcblxuXHR9XG5cbiAgICBnZXRWaWRlbyAoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgdmlkZW9cIik7XG5cbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSwgYXVkaW86IGZhbHNlfSlcbiAgICAgICAgICAgIC50aGVuKGxvY2FsTWVkaWFTdHJlYW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobG9jYWxNZWRpYVN0cmVhbSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52aWRlbyk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgT0ggTk8hISFgLCBlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYWludFRvQ2FudmFzICgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFpbnRUb0NhbnZhc1wiKTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IHdlYmNhbS52aWRlby52aWRlb1dpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3ZWJjYW0udmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgICAgIHdlYmNhbS5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgd2ViY2FtLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cblxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXG4gICAgICAgICAgICB3ZWJjYW0uY3R4LmRyYXdJbWFnZSh3ZWJjYW0udmlkZW8sIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGFrZSB0aGUgcGl4ZWxzIG91dFxuICAgICAgICAgICAgbGV0IHBpeGVscyA9IHdlYmNhbS5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZW1cbiAgICAgICAgICAgIC8vcGl4ZWxzID0gcmVkRWZmZWN0KHBpeGVscyk7XG5cbiAgICAgICAgICAgIHBpeGVscyA9IHdlYmNhbS5yZ2JTcGxpdChwaXhlbHMpO1xuICAgICAgICAgICAgd2ViY2FtLmN0eC5nbG9iYWxBbHBoYSA9IDAuODtcblxuICAgICAgICAgICAgLy9waXhlbHMgPSB3ZWJjYW0uZ3JlZW5TY3JlZW4ocGl4ZWxzKTtcbiAgICAgICAgICAgIC8vIHB1dCB0aGVtIGJhY2tcbiAgICAgICAgICAgIHdlYmNhbS5jdHgucHV0SW1hZ2VEYXRhKHBpeGVscywgMCwgMCk7XG4gICAgICAgIH0sIDE2KTtcbiAgICB9XG5cbiAgICB0YWtlUGhvdG8oKSB7XG4gICAgICAvLyBwbGF5ZWQgdGhlIHNvdW5kXG4gICAgICBjb25zb2xlLmxvZyh3ZWJjYW0pO1xuXG4gICAgICB3ZWJjYW0uc25hcC5jdXJyZW50VGltZSA9IDA7XG4gICAgICB3ZWJjYW0uc25hcC5wbGF5KCk7XG5cbiAgICAgIC8vIHRha2UgdGhlIGRhdGEgb3V0IG9mIHRoZSBjYW52YXNcbiAgICAgIGNvbnN0IGRhdGEgPSB3ZWJjYW0uY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGxpbmsuaHJlZiA9IGRhdGE7XG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnaGFuZHNvbWUnKTtcbiAgICAgIGxpbmsuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkYXRhfVwiIGFsdD1cIkhhbmRzb21lIE1hblwiIC8+YDtcbiAgICAgIHdlYmNhbS5zdHJpcC5pbnNlcnRCZWZvcmUobGluaywgd2ViY2FtLnN0cmlwLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJnYlNwbGl0KHBpeGVscykge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBpeGVscy5kYXRhLmxlbmd0aDsgaSs9NCkge1xuICAgICAgICBwaXhlbHMuZGF0YVtpIC0gMTUwXSA9IHBpeGVscy5kYXRhW2kgKyAwXTsgLy8gUkVEXG4gICAgICAgIHBpeGVscy5kYXRhW2kgKyA1MDBdID0gcGl4ZWxzLmRhdGFbaSArIDFdOyAvLyBHUkVFTlxuICAgICAgICBwaXhlbHMuZGF0YVtpIC0gNTUwXSA9IHBpeGVscy5kYXRhW2kgKyAyXTsgLy8gQmx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBpeGVscztcbiAgICB9XG5cbiAgICByZWRFZmZlY3QocGl4ZWxzKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwaXhlbHMuZGF0YS5sZW5ndGg7IGkrPTQpIHtcbiAgICAgICAgICAgIHBpeGVscy5kYXRhW2kgKyAwXSA9IHBpeGVscy5kYXRhW2kgKyAwXSArIDIwMDsgLy8gUkVEXG4gICAgICAgICAgICBwaXhlbHMuZGF0YVtpICsgMV0gPSBwaXhlbHMuZGF0YVtpICsgMV0gLSA1MDsgLy8gR1JFRU5cbiAgICAgICAgICAgIHBpeGVscy5kYXRhW2kgKyAyXSA9IHBpeGVscy5kYXRhW2kgKyAyXSAqIDAuNTsgLy8gQmx1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXhlbHM7XG4gICAgfVxuXG4gICAgZ3JlZW5TY3JlZW4ocGl4ZWxzKSB7XG4gICAgICBjb25zdCBsZXZlbHMgPSB7fTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJnYiBpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGxldmVsc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxzLmRhdGEubGVuZ3RoOyBpID0gaSArIDQpIHtcbiAgICAgICAgY29uc3QgcmVkID0gcGl4ZWxzLmRhdGFbaSArIDBdO1xuICAgICAgICBjb25zdCBncmVlbiA9IHBpeGVscy5kYXRhW2kgKyAxXTtcbiAgICAgICAgY29uc3QgYmx1ZSA9IHBpeGVscy5kYXRhW2kgKyAyXTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBwaXhlbHMuZGF0YVtpICsgM107XG5cbiAgICAgICAgaWYgKHJlZCA+PSBsZXZlbHMucm1pblxuICAgICAgICAgICYmIGdyZWVuID49IGxldmVscy5nbWluXG4gICAgICAgICAgJiYgYmx1ZSA+PSBsZXZlbHMuYm1pblxuICAgICAgICAgICYmIHJlZCA8PSBsZXZlbHMucm1heFxuICAgICAgICAgICYmIGdyZWVuIDw9IGxldmVscy5nbWF4XG4gICAgICAgICAgJiYgYmx1ZSA8PSBsZXZlbHMuYm1heCkge1xuXG4gICAgICAgICAgLy8gdGFrZSBpdCBvdXQhXG4gICAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDNdID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGl4ZWxzO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBsZXQgd2ViY2FtID0gbmV3IHdlYkNhbSgpOyIsIi8vIG1haW4uanNcblxuXG4vL2ltcG9ydCB7IGRydW1raXQgfSBmcm9tIFwiLi9tb2R1bGVzL2RydW0ta2l0LmpzXCI7XG5cbi8vaW1wb3J0IHsgY3VzdG9tdmlkZW8gfSBmcm9tIFwiLi9tb2R1bGVzL2N1c3RvbS12aWRlby5qc1wiO1xuXG4vL2ltcG9ydCB7IHNsaWRlb25zY3JvbGwgfSBmcm9tIFwiLi9tb2R1bGVzL3NsaWRlLW9uLXNjcm9sbC5qc1wiO1xuXG4vL2ltcG9ydCB7IG1vdXNlc2hhZG93IH0gZnJvbSBcIi4vbW9kdWxlcy9tb3VzZS1zaGFkb3cuanNcIjtcblxuaW1wb3J0IHsgd2ViY2FtIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJjYW0uanNcIjtcblxuXG5cbiJdfQ==
