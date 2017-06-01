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
"use strict";

var _drumKit = require("./modules/drum-kit.js");

var _customVideo = require("./modules/custom-video.js");

var _slideOnScroll = require("./modules/slide-on-scroll.js");

var _mouseShadow = require("./modules/mouse-shadow.js");

},{"./modules/custom-video.js":1,"./modules/drum-kit.js":2,"./modules/mouse-shadow.js":3,"./modules/slide-on-scroll.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9jdXN0b20tdmlkZW8uanMiLCJzcmMvanMvbW9kdWxlcy9kcnVtLWtpdC5qcyIsInNyYy9qcy9tb2R1bGVzL21vdXNlLXNoYWRvdy5qcyIsInNyYy9qcy9tb2R1bGVzL3NsaWRlLW9uLXNjcm9sbC5qcyIsInNyYy9qcy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7SSxBQUdhLHNCLEFBQUEsMEJBRVo7d0JBQWM7Y0FBQTs7d0JBRWI7O09BQUEsQUFBSyxTQUFTLFNBQUEsQUFBUyxjQUF2QixBQUFjLEFBQXVCLEFBQ3JDO09BQUEsQUFBSyxRQUFRLEtBQUEsQUFBSyxPQUFMLEFBQVksY0FBekIsQUFBYSxBQUEwQixBQUN2QztPQUFBLEFBQUssV0FBVyxLQUFBLEFBQUssT0FBTCxBQUFZLGNBQTVCLEFBQWdCLEFBQTBCLEFBQzFDO09BQUEsQUFBSyxjQUFjLEtBQUEsQUFBSyxPQUFMLEFBQVksY0FBL0IsQUFBbUIsQUFBMEIsQUFDN0M7T0FBQSxBQUFLLFNBQVMsS0FBQSxBQUFLLE9BQUwsQUFBWSxjQUExQixBQUFjLEFBQTBCLEFBQ3hDO09BQUEsQUFBSyxjQUFjLEtBQUEsQUFBSyxPQUFMLEFBQVksaUJBQS9CLEFBQW1CLEFBQTZCLEFBQ2hEO09BQUEsQUFBSyxTQUFTLEtBQUEsQUFBSyxPQUFMLEFBQVksaUJBQTFCLEFBQWMsQUFBNkIsQUFFM0M7O09BQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsU0FBUyxLQUFyQyxBQUEwQyxBQUMxQztPQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLFFBQVEsS0FBcEMsQUFBeUMsQUFDekM7T0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixTQUFTLEtBQXJDLEFBQTBDLEFB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MkMsQUFDM0M7WUFBTSxvQkFBb0IsT0FBQSxBQUFPLFVBQWpDLEFBQTJDLEFBRTNDOztZQUFJLGVBQUosQUFBbUIsbUJBQW1CLEFBQ3JDO3FCQUFBLEFBQVcsVUFBWCxBQUFxQixJQUFyQixBQUF5QixBQUN6QjtBQUZELGVBRUssQUFDSjtxQkFBQSxBQUFXLFVBQVgsQUFBcUIsT0FBckIsQUFBNEIsQUFDNUI7QUFFRDtBQWpCRCxBQW9CQTs7Ozs7OztBQUlFLElBQUksd0NBQWdCLElBQXBCLEFBQW9CLEFBQUk7Ozs7O0FDakQvQjs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLy0tMTAuMCAtIEN1c3RvbSBWaWRlby0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbmV4cG9ydCBjbGFzcyBjdXN0b21WaWRlbyB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLnBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuXHRcdHRoaXMudmlkZW8gPSB0aGlzLnBsYXllci5xdWVyeVNlbGVjdG9yKCcudmlld2VyJyk7XG5cdFx0dGhpcy5wcm9ncmVzcyA9IHRoaXMucGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpO1xuXHRcdHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnBsYXllci5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2ZpbGxlZCcpO1xuXHRcdHRoaXMudG9nZ2xlID0gdGhpcy5wbGF5ZXIucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuXHRcdHRoaXMuc2tpcEJ1dHRvbnMgPSB0aGlzLnBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1za2lwXScpO1xuXHRcdHRoaXMucmFuZ2VzID0gdGhpcy5wbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcl9fc2xpZGVyJyk7XG5cblx0XHR0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQbGF5KTtcblx0XHR0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLnVwZGF0ZUJ1dHRvbik7XG5cdFx0dGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMudXBkYXRlQnV0dG9uKTtcblx0XHR0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLmhhbmRsZVByb2dyZXNzKTtcblxuXHRcdHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQbGF5KTtcblxuXHRcdHRoaXMuc2tpcEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5za2lwKSk7XG5cdFx0dGhpcy5yYW5nZXMuZm9yRWFjaChyYW5nZSA9PiByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVJhbmdlVXBkYXRlKSk7XG5cdFx0dGhpcy5yYW5nZXMuZm9yRWFjaChyYW5nZSA9PiByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZVJhbmdlVXBkYXRlKSk7XG5cblx0XHRsZXQgbW91c2Vkb3duID0gZmFsc2U7XG5cblx0XHR0aGlzLnByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51c2VyQ2xpY2tlZFNraXApO1xuXHRcdHRoaXMucHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IG1vdXNlZG93biAmJiB0aGlzLnVzZXJDbGlja2VkU2tpcChlKSk7XG5cdFx0dGhpcy5wcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBtb3VzZWRvd24gPSB0cnVlKTtcblx0XHR0aGlzLnByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiBtb3VzZWRvd24gPSBmYWxzZSk7XG5cblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGNvbnN0IG1ldGhvZCA9IGN1c3RvbXZpZGVvLnZpZGVvLnBhdXNlZCA/ICdwbGF5JyA6ICdwYXVzZSc7XG5cdFx0Y3VzdG9tdmlkZW8udmlkZW9bbWV0aG9kXSgpO1xuXHR9XG5cblx0dXBkYXRlQnV0dG9uICgpIHtcblx0XHRjb25zdCBpY29uID0gdGhpcy5wYXVzZWQgPyAn4pa6JyA6ICfinZog4p2aJztcblx0XHRjdXN0b212aWRlby50b2dnbGUudGV4dENvbnRlbnQgPSBpY29uO1xuXHR9XG5cblx0c2tpcCAoKSB7XG5cdFx0Y3VzdG9tdmlkZW8udmlkZW8uY3VycmVudFRpbWUgKz0gcGFyc2VGbG9hdCh0aGlzLmRhdGFzZXQuc2tpcCk7XG5cdH1cblxuXHRoYW5kbGVSYW5nZVVwZGF0ZSAoKSB7XG5cdFx0Y3VzdG9tdmlkZW8udmlkZW9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XG5cdH1cblxuXHRoYW5kbGVQcm9ncmVzcyAoKSB7XG5cdFx0Y29uc3QgcGVyY2VudCA9IChjdXN0b212aWRlby52aWRlby5jdXJyZW50VGltZSAvIGN1c3RvbXZpZGVvLnZpZGVvLmR1cmF0aW9uKSAqIDEwMDtcblxuXHRcdGN1c3RvbXZpZGVvLnByb2dyZXNzQmFyLnN0eWxlLmZsZXhCYXNpcyA9IGAke3BlcmNlbnR9JWA7XG5cdH1cblxuXHR1c2VyQ2xpY2tlZFNraXAgKGUpIHtcblxuXHRcdGNvbnN0IHNraXBUaW1lID0gKGUub2Zmc2V0WCAvIGN1c3RvbXZpZGVvLnByb2dyZXNzLm9mZnNldFdpZHRoKSAqIGN1c3RvbXZpZGVvLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGN1c3RvbXZpZGVvLnZpZGVvLmN1cnJlbnRUaW1lID0gc2tpcFRpbWU7XG5cblx0fVxuXG5cbn1cblxuZXhwb3J0IGxldCBjdXN0b212aWRlbyA9IG5ldyBjdXN0b21WaWRlbygpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyIsImV4cG9ydCBjbGFzcyBEcnVtS2l0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rZXlcIik7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5yZW1vdmVUcmFuc2l0aW9uKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucGxheVNvdW5kKTtcblx0fVxuXG5cdHJlbW92ZVRyYW5zaXRpb24oZSkge1xuXHRcdGlmIChlLnByb3BlcnR5TmFtZSAhPT0gJ3RyYW5zZm9ybScpIHJldHVybjtcblx0XHRlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRwbGF5U291bmQoZSkge1xuXHRcdGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcblx0XHRjb25zdCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2V5W2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG5cblx0XHRpZiAoICFhdWRpbyApe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcblx0XHRhdWRpby5wbGF5KCk7XG5cdFx0a2V5LmNsYXNzTGlzdC5hZGQoXCJwbGF5aW5nXCIpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGxldCBkcnVta2l0ID0gbmV3IERydW1LaXQoKTsiLCJleHBvcnQgY2xhc3MgbW91c2VTaGFkb3cge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblxuXHRcdHRoaXMuaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG5cdFx0dGhpcy50ZXh0ID0gdGhpcy5oZXJvLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5cdFx0dGhpcy5oZXJvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuc2hhZG93KTtcblx0XHR0aGlzLndhbGsgPSA1MDtcblx0fVxuXG5cdHNoYWRvdyAoZSkge1xuXHRcdGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gbW91c2VzaGFkb3cuaGVybztcblx0XHRsZXQgeyBvZmZzZXRYOiB4LCBvZmZzZXRZOiB5IH0gPSBlO1xuXG5cdFx0aWYgKHRoaXMgIT09IGUudGFyZ2V0KSB7XG5cdFx0XHR4ID0geCArIGUudGFyZ2V0Lm9mZnNldExlZnQ7XG5cdFx0XHR5ID0geSArIGUudGFyZ2V0Lm9mZnNldFRvcDtcblx0XHR9XG5cblx0XHRjb25zdCB4V2FsayA9IE1hdGgucm91bmQoKHggLyB3aWR0aCAqIG1vdXNlc2hhZG93LndhbGspIC0gKG1vdXNlc2hhZG93LndhbGsgLyAyKSk7XG5cdFx0Y29uc3QgeVdhbGsgPSBNYXRoLnJvdW5kKCh5IC8gaGVpZ2h0ICogbW91c2VzaGFkb3cud2FsaykgLSAobW91c2VzaGFkb3cud2FsayAvIDIpKTtcblxuXHRcdG1vdXNlc2hhZG93LnRleHQuc3R5bGUudGV4dFNoYWRvdyA9IGAke3hXYWxrfXB4ICR7eVdhbGt9cHggMCByZWRgO1xuXHR9XG5cblxufVxuXG5leHBvcnQgbGV0IG1vdXNlc2hhZG93ID0gbmV3IG1vdXNlU2hhZG93KCk7IiwiZXhwb3J0IGNsYXNzIHNsaWRlT25TY3JvbGwge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5zbGlkZUltYWdlcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtaW4nKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5jZSh0aGlzLmNoZWNrU2xpZGUpKTtcblxuXHR9XG5cblxuICAgIGRlYm91bmNlKGZ1bmMsIHdhaXQgPSAyMCwgaW1tZWRpYXRlID0gdHJ1ZSkge1xuICAgICAgdmFyIHRpbWVvdXQ7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2hlY2tTbGlkZSAoZSl7XG5cbiAgICBcdHNsaWRlb25zY3JvbGwuc2xpZGVJbWFnZXMuZm9yRWFjaChzbGlkZUltYWdlID0+IHtcblxuICAgIFx0XHQvLyBIYWxmIHdheSB0aHJvdWdoIHRoZSBpbWFnZVxuICAgIFx0XHRjb25zdCBzbGlkZUluQXQgPSAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQpIC0gc2xpZGVJbWFnZS5oZWlnaHQgLyAyO1xuXG4gICAgXHRcdC8vIEJvdHRvbSBvZiB0aGUgaW1hZ2VcbiAgICBcdFx0Y29uc3QgaW1hZ2VCb3R0b20gPSBzbGlkZUltYWdlLm9mZnNldFRvcCArIHNsaWRlSW1hZ2UuaGVpZ2h0O1xuXG4gICAgXHRcdGNvbnN0IGlzSGFsZlNob3duID0gc2xpZGVJbkF0ID4gc2xpZGVJbWFnZS5vZmZzZXRUb3A7XG4gICAgXHRcdGNvbnN0IGlzTm90U2Nyb2xsZWRQYXN0ID0gd2luZG93LnNjcm9sbFkgPCBpbWFnZUJvdHRvbTtcblxuICAgIFx0XHRpZiAoaXNIYWxmU2hvd24gJiYgaXNOb3RTY3JvbGxlZFBhc3QpIHtcbiAgICBcdFx0XHRzbGlkZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIFx0XHR9ZWxzZXtcbiAgICBcdFx0XHRzbGlkZUltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIFx0XHR9XG5cbiAgICBcdH0pO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGxldCBzbGlkZW9uc2Nyb2xsID0gbmV3IHNsaWRlT25TY3JvbGwoKTsiLCIvLyBtYWluLmpzXG5cblxuaW1wb3J0IHsgZHJ1bWtpdCB9IGZyb20gXCIuL21vZHVsZXMvZHJ1bS1raXQuanNcIjtcblxuaW1wb3J0IHsgY3VzdG9tdmlkZW8gfSBmcm9tIFwiLi9tb2R1bGVzL2N1c3RvbS12aWRlby5qc1wiO1xuXG5pbXBvcnQgeyBzbGlkZW9uc2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZS1vbi1zY3JvbGwuanNcIjtcblxuaW1wb3J0IHsgbW91c2VzaGFkb3cgfSBmcm9tIFwiLi9tb2R1bGVzL21vdXNlLXNoYWRvdy5qc1wiO1xuXG4vL2ltcG9ydCB7IHdlYmNhbSB9IGZyb20gXCIuL21vZHVsZXMvd2ViY2FtLmpzXCI7XG5cblxuXG4iXX0=
