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

//--10.0 - Custom Video-------------------------------------------------------------//


var customVideo = exports.customVideo = function () {
	function customVideo() {
		var _this = this;

		_classCallCheck(this, customVideo);

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

		this.skipButtons.forEach(function (button) {
			return button.addEventListener('click', _this.skip);
		});
		this.ranges.forEach(function (range) {
			return range.addEventListener('change', _this.handleRangeUpdate);
		});
		this.ranges.forEach(function (range) {
			return range.addEventListener('mousemove', _this.handleRangeUpdate);
		});

		var mousedown = false;

		this.progress.addEventListener('click', this.userClickedSkip);
		this.progress.addEventListener('mousemove', function (e) {
			return mousedown && _this.userClickedSkip(e);
		});
		this.progress.addEventListener('mousedown', function () {
			return mousedown = true;
		});
		this.progress.addEventListener('mouseup', function () {
			return mousedown = false;
		});
	}

	_createClass(customVideo, [{
		key: 'togglePlay',
		value: function togglePlay() {
			var method = customvideo.video.paused ? 'play' : 'pause';
			customvideo.video[method]();
		}
	}, {
		key: 'updateButton',
		value: function updateButton() {
			var icon = this.paused ? '►' : '❚ ❚';
			customvideo.toggle.textContent = icon;
		}
	}, {
		key: 'skip',
		value: function skip() {
			customvideo.video.currentTime += parseFloat(this.dataset.skip);
		}
	}, {
		key: 'handleRangeUpdate',
		value: function handleRangeUpdate() {
			customvideo.video[this.name] = this.value;
		}
	}, {
		key: 'handleProgress',
		value: function handleProgress() {
			var percent = customvideo.video.currentTime / customvideo.video.duration * 100;

			customvideo.progressBar.style.flexBasis = percent + '%';
		}
	}, {
		key: 'userClickedSkip',
		value: function userClickedSkip(e) {

			var skipTime = e.offsetX / customvideo.progress.offsetWidth * customvideo.video.duration;
			customvideo.video.currentTime = skipTime;
		}
	}]);

	return customVideo;
}();

var customvideo = exports.customvideo = new customVideo();

//----------------------------------------------------------------------------------//

},{}],2:[function(require,module,exports){
"use strict";

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

var DrumKit = exports.DrumKit = function () {
	function DrumKit() {
		var _this = this;

		_classCallCheck(this, DrumKit);

		var keys = document.querySelectorAll(".key");
		keys.forEach(function (key) {
			return key.addEventListener("transitionend", _this.removeTransition);
		});
		window.addEventListener("keydown", this.playSound);
	}

	_createClass(DrumKit, [{
		key: "removeTransition",
		value: function removeTransition(e) {
			if (e.propertyName !== 'transform') return;
			e.target.classList.remove('playing');
		}
	}, {
		key: "playSound",
		value: function playSound(e) {
			var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
			var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");

			if (!audio) {
				return;
			}

			audio.currentTime = 0;
			audio.play();
			key.classList.add("playing");
		}
	}]);

	return DrumKit;
}();

var drumkit = exports.drumkit = new DrumKit();

},{}],3:[function(require,module,exports){
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

var mouseShadow = exports.mouseShadow = function () {
	function mouseShadow() {
		_classCallCheck(this, mouseShadow);

		this.hero = document.querySelector('.hero');
		this.text = this.hero.querySelector('h1');
		this.hero.addEventListener('mousemove', this.shadow);
		this.walk = 50;
	}

	_createClass(mouseShadow, [{
		key: 'shadow',
		value: function shadow(e) {
			var _mouseshadow$hero = mouseshadow.hero,
			    width = _mouseshadow$hero.offsetWidth,
			    height = _mouseshadow$hero.offsetHeight;
			var x = e.offsetX,
			    y = e.offsetY;

			if (this !== e.target) {
				x = x + e.target.offsetLeft;
				y = y + e.target.offsetTop;
			}

			var xWalk = Math.round(x / width * mouseshadow.walk - mouseshadow.walk / 2);
			var yWalk = Math.round(y / height * mouseshadow.walk - mouseshadow.walk / 2);

			mouseshadow.text.style.textShadow = xWalk + 'px ' + yWalk + 'px 0 red';
		}
	}]);

	return mouseShadow;
}();

var mouseshadow = exports.mouseshadow = new mouseShadow();

},{}],4:[function(require,module,exports){
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

var slideOnScroll = exports.slideOnScroll = function () {
  function slideOnScroll() {
    _classCallCheck(this, slideOnScroll);

    this.slideImages = document.querySelectorAll('.slide-in');
    window.addEventListener('scroll', this.debounce(this.checkSlide));
  }

  _createClass(slideOnScroll, [{
    key: 'debounce',
    value: function debounce(func) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var timeout;

      return function () {
        var context = this,
            args = arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  }, {
    key: 'checkSlide',
    value: function checkSlide(e) {

      slideonscroll.slideImages.forEach(function (slideImage) {

        // Half way through the image
        var slideInAt = window.scrollY + window.innerHeight - slideImage.height / 2;

        // Bottom of the image
        var imageBottom = slideImage.offsetTop + slideImage.height;

        var isHalfShown = slideInAt > slideImage.offsetTop;
        var isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
          slideImage.classList.add('active');
        } else {
          slideImage.classList.remove('active');
        }
      });
    }
  }]);

  return slideOnScroll;
}();

var slideonscroll = exports.slideonscroll = new slideOnScroll();

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

var _drumKit = require("./modules/drum-kit.js");

var _customVideo = require("./modules/custom-video.js");

var _slideOnScroll = require("./modules/slide-on-scroll.js");

var _mouseShadow = require("./modules/mouse-shadow.js");

var _webcam = require("./modules/webcam.js");

},{"./modules/custom-video.js":1,"./modules/drum-kit.js":2,"./modules/mouse-shadow.js":3,"./modules/slide-on-scroll.js":4,"./modules/webcam.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9jdXN0b20tdmlkZW8uanMiLCJzcmMvanMvbW9kdWxlcy9kcnVtLWtpdC5qcyIsInNyYy9qcy9tb2R1bGVzL21vdXNlLXNoYWRvdy5qcyIsInNyYy9qcy9tb2R1bGVzL3NsaWRlLW9uLXNjcm9sbC5qcyIsInNyYy9qcy9tb2R1bGVzL3dlYmNhbS5qcyIsInNyYy9qcy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7SSxBQUdhLHNCLEFBQUEsMEJBRVo7d0JBQWM7Y0FBQTs7d0JBRWI7O09BQUEsQUFBSyxTQUFTLFNBQUEsQUFBUyxjQUF2QixBQUFjLEFBQXVCLEFBQ3JDO09BQUEsQUFBSyxRQUFRLEtBQUEsQUFBSyxPQUFMLEFBQVksY0FBekIsQUFBYSxBQUEwQixBQUN2QztPQUFBLEFBQUssV0FBVyxLQUFBLEFBQUssT0FBTCxBQUFZLGNBQTVCLEFBQWdCLEFBQTBCLEFBQzFDO09BQUEsQUFBSyxjQUFjLEtBQUEsQUFBSyxPQUFMLEFBQVksY0FBL0IsQUFBbUIsQUFBMEIsQUFDN0M7T0FBQSxBQUFLLFNBQVMsS0FBQSxBQUFLLE9BQUwsQUFBWSxjQUExQixBQUFjLEFBQTBCLEFBQ3hDO09BQUEsQUFBSyxjQUFjLEtBQUEsQUFBSyxPQUFMLEFBQVksaUJBQS9CLEFBQW1CLEFBQTZCLEFBQ2hEO09BQUEsQUFBSyxTQUFTLEtBQUEsQUFBSyxPQUFMLEFBQVksaUJBQTFCLEFBQWMsQUFBNkIsQUFFM0M7O09BQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsU0FBUyxLQUFyQyxBQUEwQyxBQUMxQztPQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLFFBQVEsS0FBcEMsQUFBeUMsQUFDekM7T0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFB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QUFPLEtBQUssSUFBWixBQUFnQixLQUhJLEFBR3pDLEFBQTBDLEtBQUssQUFDbEQ7QUFDRDttQkFBQSxBQUFPLEFBQ1Y7Ozs7b0MsQUFFVyxRQUFRLEFBQ2xCO2dCQUFNLFNBQU4sQUFBZSxBQUVmOztxQkFBQSxBQUFTLGlCQUFULEFBQTBCLGNBQTFCLEFBQXdDLFFBQVEsVUFBQSxBQUFDLE9BQVUsQUFDekQ7dUJBQU8sTUFBUCxBQUFhLFFBQVEsTUFBckIsQUFBMkIsQUFDNUI7QUFGRCxBQUlBOztpQkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksT0FBQSxBQUFPLEtBQTNCLEFBQWdDLFFBQVEsSUFBSSxJQUE1QyxBQUFnRCxHQUFHLEFBQ2pEO29CQUFNLE1BQU0sT0FBQSxBQUFPLEtBQUssSUFBeEIsQUFBWSxBQUFnQixBQUM1QjtvQkFBTSxRQUFRLE9BQUEsQUFBTyxLQUFLLElBQTFCLEFBQWMsQUFBZ0IsQUFDOUI7b0JBQU0sT0FBTyxPQUFBLEFBQU8sS0FBSyxJQUF6QixBQUFhLEFBQWdCLEFBQzdCO29CQUFNLFFBQVEsT0FBQSxBQUFPLEtBQUssSUFBMUIsQUFBYyxBQUFnQixBQUU5Qjs7b0JBQUksT0FBTyxPQUFQLEFBQWMsUUFDYixTQUFTLE9BRFYsQUFDaUIsUUFDaEIsUUFBUSxPQUZULEFBRWdCLFFBQ2YsT0FBTyxPQUhSLEFBR2UsUUFDZCxTQUFTLE9BSlYsQUFJaUIsUUFDaEIsUUFBUSxPQUxiLEFBS29CLE1BQU0sQUFFeEI7O0FBQ0E7MkJBQUEsQUFBTyxLQUFLLElBQVosQUFBZ0IsS0FBaEIsQUFBcUIsQUFDdEI7QUFDRjtBQUVEOzttQkFBQSxBQUFPLEFBQ1I7Ozs7Ozs7QUFLRSxJQUFJLDBCQUFTLElBQWIsQUFBYSxBQUFJOzs7OztBQ3pIeEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8tLTEwLjAgLSBDdXN0b20gVmlkZW8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG5leHBvcnQgY2xhc3MgY3VzdG9tVmlkZW8ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcblx0XHR0aGlzLnZpZGVvID0gdGhpcy5wbGF5ZXIucXVlcnlTZWxlY3RvcignLnZpZXdlcicpO1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSB0aGlzLnBsYXllci5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKTtcblx0XHR0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5wbGF5ZXIucXVlcnlTZWxlY3RvcignLnByb2dyZXNzX19maWxsZWQnKTtcblx0XHR0aGlzLnRvZ2dsZSA9IHRoaXMucGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcblx0XHR0aGlzLnNraXBCdXR0b25zID0gdGhpcy5wbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2tpcF0nKTtcblx0XHR0aGlzLnJhbmdlcyA9IHRoaXMucGxheWVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJfX3NsaWRlcicpO1xuXG5cdFx0dGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUGxheSk7XG5cdFx0dGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy51cGRhdGVCdXR0b24pO1xuXHRcdHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCB0aGlzLnVwZGF0ZUJ1dHRvbik7XG5cdFx0dGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy5oYW5kbGVQcm9ncmVzcyk7XG5cblx0XHR0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUGxheSk7XG5cblx0XHR0aGlzLnNraXBCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2tpcCkpO1xuXHRcdHRoaXMucmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4gcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZSkpO1xuXHRcdHRoaXMucmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4gcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZSkpO1xuXG5cdFx0bGV0IG1vdXNlZG93biA9IGZhbHNlO1xuXG5cdFx0dGhpcy5wcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXNlckNsaWNrZWRTa2lwKTtcblx0XHR0aGlzLnByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiBtb3VzZWRvd24gJiYgdGhpcy51c2VyQ2xpY2tlZFNraXAoZSkpO1xuXHRcdHRoaXMucHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gbW91c2Vkb3duID0gdHJ1ZSk7XG5cdFx0dGhpcy5wcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4gbW91c2Vkb3duID0gZmFsc2UpO1xuXG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRjb25zdCBtZXRob2QgPSBjdXN0b212aWRlby52aWRlby5wYXVzZWQgPyAncGxheScgOiAncGF1c2UnO1xuXHRcdGN1c3RvbXZpZGVvLnZpZGVvW21ldGhvZF0oKTtcblx0fVxuXG5cdHVwZGF0ZUJ1dHRvbiAoKSB7XG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucGF1c2VkID8gJ+KWuicgOiAn4p2aIOKdmic7XG5cdFx0Y3VzdG9tdmlkZW8udG9nZ2xlLnRleHRDb250ZW50ID0gaWNvbjtcblx0fVxuXG5cdHNraXAgKCkge1xuXHRcdGN1c3RvbXZpZGVvLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBhcnNlRmxvYXQodGhpcy5kYXRhc2V0LnNraXApO1xuXHR9XG5cblx0aGFuZGxlUmFuZ2VVcGRhdGUgKCkge1xuXHRcdGN1c3RvbXZpZGVvLnZpZGVvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xuXHR9XG5cblx0aGFuZGxlUHJvZ3Jlc3MgKCkge1xuXHRcdGNvbnN0IHBlcmNlbnQgPSAoY3VzdG9tdmlkZW8udmlkZW8uY3VycmVudFRpbWUgLyBjdXN0b212aWRlby52aWRlby5kdXJhdGlvbikgKiAxMDA7XG5cblx0XHRjdXN0b212aWRlby5wcm9ncmVzc0Jhci5zdHlsZS5mbGV4QmFzaXMgPSBgJHtwZXJjZW50fSVgO1xuXHR9XG5cblx0dXNlckNsaWNrZWRTa2lwIChlKSB7XG5cblx0XHRjb25zdCBza2lwVGltZSA9IChlLm9mZnNldFggLyBjdXN0b212aWRlby5wcm9ncmVzcy5vZmZzZXRXaWR0aCkgKiBjdXN0b212aWRlby52aWRlby5kdXJhdGlvbjtcblx0XHRjdXN0b212aWRlby52aWRlby5jdXJyZW50VGltZSA9IHNraXBUaW1lO1xuXG5cdH1cblxuXG59XG5cbmV4cG9ydCBsZXQgY3VzdG9tdmlkZW8gPSBuZXcgY3VzdG9tVmlkZW8oKTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8iLCJleHBvcnQgY2xhc3MgRHJ1bUtpdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Y29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIua2V5XCIpO1xuXHRcdGtleXMuZm9yRWFjaChrZXkgPT4ga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMucmVtb3ZlVHJhbnNpdGlvbikpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnBsYXlTb3VuZCk7XG5cdH1cblxuXHRyZW1vdmVUcmFuc2l0aW9uKGUpIHtcblx0XHRpZiAoZS5wcm9wZXJ0eU5hbWUgIT09ICd0cmFuc2Zvcm0nKSByZXR1cm47XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuXHR9XG5cblx0cGxheVNvdW5kKGUpIHtcblx0XHRjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG5cdFx0Y29uc3Qga2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmtleVtkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuXG5cdFx0aWYgKCAhYXVkaW8gKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhdWRpby5jdXJyZW50VGltZSA9IDA7XG5cdFx0YXVkaW8ucGxheSgpO1xuXHRcdGtleS5jbGFzc0xpc3QuYWRkKFwicGxheWluZ1wiKTtcblx0fVxuXG59XG5cbmV4cG9ydCBsZXQgZHJ1bWtpdCA9IG5ldyBEcnVtS2l0KCk7IiwiZXhwb3J0IGNsYXNzIG1vdXNlU2hhZG93IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cblx0XHR0aGlzLmhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuXHRcdHRoaXMudGV4dCA9IHRoaXMuaGVyby5xdWVyeVNlbGVjdG9yKCdoMScpO1xuXHRcdHRoaXMuaGVyby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnNoYWRvdyk7XG5cdFx0dGhpcy53YWxrID0gNTA7XG5cdH1cblxuXHRzaGFkb3cgKGUpIHtcblx0XHRjb25zdCB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IG1vdXNlc2hhZG93Lmhlcm87XG5cdFx0bGV0IHsgb2Zmc2V0WDogeCwgb2Zmc2V0WTogeSB9ID0gZTtcblxuXHRcdGlmICh0aGlzICE9PSBlLnRhcmdldCkge1xuXHRcdFx0eCA9IHggKyBlLnRhcmdldC5vZmZzZXRMZWZ0O1xuXHRcdFx0eSA9IHkgKyBlLnRhcmdldC5vZmZzZXRUb3A7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeFdhbGsgPSBNYXRoLnJvdW5kKCh4IC8gd2lkdGggKiBtb3VzZXNoYWRvdy53YWxrKSAtIChtb3VzZXNoYWRvdy53YWxrIC8gMikpO1xuXHRcdGNvbnN0IHlXYWxrID0gTWF0aC5yb3VuZCgoeSAvIGhlaWdodCAqIG1vdXNlc2hhZG93LndhbGspIC0gKG1vdXNlc2hhZG93LndhbGsgLyAyKSk7XG5cblx0XHRtb3VzZXNoYWRvdy50ZXh0LnN0eWxlLnRleHRTaGFkb3cgPSBgJHt4V2Fsa31weCAke3lXYWxrfXB4IDAgcmVkYDtcblx0fVxuXG5cbn1cblxuZXhwb3J0IGxldCBtb3VzZXNoYWRvdyA9IG5ldyBtb3VzZVNoYWRvdygpOyIsImV4cG9ydCBjbGFzcyBzbGlkZU9uU2Nyb2xsIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMuc2xpZGVJbWFnZXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlLWluJyk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuY2UodGhpcy5jaGVja1NsaWRlKSk7XG5cblx0fVxuXG5cbiAgICBkZWJvdW5jZShmdW5jLCB3YWl0ID0gMjAsIGltbWVkaWF0ZSA9IHRydWUpIHtcbiAgICAgIHZhciB0aW1lb3V0O1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNoZWNrU2xpZGUgKGUpe1xuXG4gICAgXHRzbGlkZW9uc2Nyb2xsLnNsaWRlSW1hZ2VzLmZvckVhY2goc2xpZGVJbWFnZSA9PiB7XG5cbiAgICBcdFx0Ly8gSGFsZiB3YXkgdGhyb3VnaCB0aGUgaW1hZ2VcbiAgICBcdFx0Y29uc3Qgc2xpZGVJbkF0ID0gKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0KSAtIHNsaWRlSW1hZ2UuaGVpZ2h0IC8gMjtcblxuICAgIFx0XHQvLyBCb3R0b20gb2YgdGhlIGltYWdlXG4gICAgXHRcdGNvbnN0IGltYWdlQm90dG9tID0gc2xpZGVJbWFnZS5vZmZzZXRUb3AgKyBzbGlkZUltYWdlLmhlaWdodDtcblxuICAgIFx0XHRjb25zdCBpc0hhbGZTaG93biA9IHNsaWRlSW5BdCA+IHNsaWRlSW1hZ2Uub2Zmc2V0VG9wO1xuICAgIFx0XHRjb25zdCBpc05vdFNjcm9sbGVkUGFzdCA9IHdpbmRvdy5zY3JvbGxZIDwgaW1hZ2VCb3R0b207XG5cbiAgICBcdFx0aWYgKGlzSGFsZlNob3duICYmIGlzTm90U2Nyb2xsZWRQYXN0KSB7XG4gICAgXHRcdFx0c2xpZGVJbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBcdFx0fWVsc2V7XG4gICAgXHRcdFx0c2xpZGVJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBcdFx0fVxuXG4gICAgXHR9KTtcblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBsZXQgc2xpZGVvbnNjcm9sbCA9IG5ldyBzbGlkZU9uU2Nyb2xsKCk7IiwiZXhwb3J0IGNsYXNzIHdlYkNhbSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyJyk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5zdHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpcCcpO1xuICAgICAgICB0aGlzLnNuYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25hcCcpO1xuXG4gICAgICAgIHRoaXMuZ2V0VmlkZW8oKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMucGFpbnRUb0NhbnZhcyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50YWtlUGhvdG8pO1xuICAgICAgICAvL3RoaXMucGFpbnRUb0NhbnZhcygpO1xuXG5cdH1cblxuICAgIGdldFZpZGVvICgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImdldCB2aWRlb1wiKTtcblxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IHZpZGVvOiB0cnVlLCBhdWRpbzogZmFsc2V9KVxuICAgICAgICAgICAgLnRoZW4obG9jYWxNZWRpYVN0cmVhbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChsb2NhbE1lZGlhU3RyZWFtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZpZGVvKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBPSCBOTyEhIWAsIGVycik7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhaW50VG9DYW52YXMgKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWludFRvQ2FudmFzXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2ViY2FtLnZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdlYmNhbS52aWRlby52aWRlb0hlaWdodDtcbiAgICAgICAgd2ViY2FtLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB3ZWJjYW0uY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuXG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHdlYmNhbS5jdHguZHJhd0ltYWdlKHdlYmNhbS52aWRlbywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAvLyB0YWtlIHRoZSBwaXhlbHMgb3V0XG4gICAgICAgICAgICBsZXQgcGl4ZWxzID0gd2ViY2FtLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAvLyBtZXNzIHdpdGggdGhlbVxuICAgICAgICAgICAgLy9waXhlbHMgPSByZWRFZmZlY3QocGl4ZWxzKTtcblxuICAgICAgICAgICAgcGl4ZWxzID0gd2ViY2FtLnJnYlNwbGl0KHBpeGVscyk7XG4gICAgICAgICAgICB3ZWJjYW0uY3R4Lmdsb2JhbEFscGhhID0gMC44O1xuXG4gICAgICAgICAgICAvL3BpeGVscyA9IHdlYmNhbS5ncmVlblNjcmVlbihwaXhlbHMpO1xuICAgICAgICAgICAgLy8gcHV0IHRoZW0gYmFja1xuICAgICAgICAgICAgd2ViY2FtLmN0eC5wdXRJbWFnZURhdGEocGl4ZWxzLCAwLCAwKTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH1cblxuICAgIHRha2VQaG90bygpIHtcbiAgICAgIC8vIHBsYXllZCB0aGUgc291bmRcbiAgICAgIGNvbnNvbGUubG9nKHdlYmNhbSk7XG5cbiAgICAgIHdlYmNhbS5zbmFwLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgIHdlYmNhbS5zbmFwLnBsYXkoKTtcblxuICAgICAgLy8gdGFrZSB0aGUgZGF0YSBvdXQgb2YgdGhlIGNhbnZhc1xuICAgICAgY29uc3QgZGF0YSA9IHdlYmNhbS5jYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gZGF0YTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdoYW5kc29tZScpO1xuICAgICAgbGluay5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2RhdGF9XCIgYWx0PVwiSGFuZHNvbWUgTWFuXCIgLz5gO1xuICAgICAgd2ViY2FtLnN0cmlwLmluc2VydEJlZm9yZShsaW5rLCB3ZWJjYW0uc3RyaXAuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmdiU3BsaXQocGl4ZWxzKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGl4ZWxzLmRhdGEubGVuZ3RoOyBpKz00KSB7XG4gICAgICAgIHBpeGVscy5kYXRhW2kgLSAxNTBdID0gcGl4ZWxzLmRhdGFbaSArIDBdOyAvLyBSRURcbiAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDUwMF0gPSBwaXhlbHMuZGF0YVtpICsgMV07IC8vIEdSRUVOXG4gICAgICAgIHBpeGVscy5kYXRhW2kgLSA1NTBdID0gcGl4ZWxzLmRhdGFbaSArIDJdOyAvLyBCbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gcGl4ZWxzO1xuICAgIH1cblxuICAgIHJlZEVmZmVjdChwaXhlbHMpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBpeGVscy5kYXRhLmxlbmd0aDsgaSs9NCkge1xuICAgICAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDBdID0gcGl4ZWxzLmRhdGFbaSArIDBdICsgMjAwOyAvLyBSRURcbiAgICAgICAgICAgIHBpeGVscy5kYXRhW2kgKyAxXSA9IHBpeGVscy5kYXRhW2kgKyAxXSAtIDUwOyAvLyBHUkVFTlxuICAgICAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDJdID0gcGl4ZWxzLmRhdGFbaSArIDJdICogMC41OyAvLyBCbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpeGVscztcbiAgICB9XG5cbiAgICBncmVlblNjcmVlbihwaXhlbHMpIHtcbiAgICAgIGNvbnN0IGxldmVscyA9IHt9O1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmdiIGlucHV0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgbGV2ZWxzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaXhlbHMuZGF0YS5sZW5ndGg7IGkgPSBpICsgNCkge1xuICAgICAgICBjb25zdCByZWQgPSBwaXhlbHMuZGF0YVtpICsgMF07XG4gICAgICAgIGNvbnN0IGdyZWVuID0gcGl4ZWxzLmRhdGFbaSArIDFdO1xuICAgICAgICBjb25zdCBibHVlID0gcGl4ZWxzLmRhdGFbaSArIDJdO1xuICAgICAgICBjb25zdCBhbHBoYSA9IHBpeGVscy5kYXRhW2kgKyAzXTtcblxuICAgICAgICBpZiAocmVkID49IGxldmVscy5ybWluXG4gICAgICAgICAgJiYgZ3JlZW4gPj0gbGV2ZWxzLmdtaW5cbiAgICAgICAgICAmJiBibHVlID49IGxldmVscy5ibWluXG4gICAgICAgICAgJiYgcmVkIDw9IGxldmVscy5ybWF4XG4gICAgICAgICAgJiYgZ3JlZW4gPD0gbGV2ZWxzLmdtYXhcbiAgICAgICAgICAmJiBibHVlIDw9IGxldmVscy5ibWF4KSB7XG5cbiAgICAgICAgICAvLyB0YWtlIGl0IG91dCFcbiAgICAgICAgICBwaXhlbHMuZGF0YVtpICsgM10gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwaXhlbHM7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGxldCB3ZWJjYW0gPSBuZXcgd2ViQ2FtKCk7IiwiLy8gbWFpbi5qc1xuXG5cbmltcG9ydCB7IGRydW1raXQgfSBmcm9tIFwiLi9tb2R1bGVzL2RydW0ta2l0LmpzXCI7XG5cbmltcG9ydCB7IGN1c3RvbXZpZGVvIH0gZnJvbSBcIi4vbW9kdWxlcy9jdXN0b20tdmlkZW8uanNcIjtcblxuaW1wb3J0IHsgc2xpZGVvbnNjcm9sbCB9IGZyb20gXCIuL21vZHVsZXMvc2xpZGUtb24tc2Nyb2xsLmpzXCI7XG5cbmltcG9ydCB7IG1vdXNlc2hhZG93IH0gZnJvbSBcIi4vbW9kdWxlcy9tb3VzZS1zaGFkb3cuanNcIjtcblxuaW1wb3J0IHsgd2ViY2FtIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJjYW0uanNcIjtcblxuXG5cbiJdfQ==
