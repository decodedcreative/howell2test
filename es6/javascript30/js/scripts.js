(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

var _drumKit = require("./modules/drum-kit.js");

},{"./modules/drum-kit.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9kcnVtLWtpdC5qcyIsInNyYy9qcy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFDQWEsa0IsQUFBQSxzQkFFWjtvQkFBYztjQUFBOzt3QkFDYjs7TUFBTSxPQUFPLFNBQUEsQUFBUyxpQkFBdEIsQUFBYSxBQUEwQixBQUN2QztPQUFBLEFBQUssUUFBUSxlQUFBO1VBQU8sSUFBQSxBQUFJLGlCQUFKLEFBQXFCLGlCQUFpQixNQUE3QyxBQUFPLEFBQTJDO0FBQS9ELEFBQ0E7U0FBQSxBQUFPLGlCQUFQLEFBQXdCLFdBQVcsS0FBbkMsQUFBd0MsQUFDeEM7Ozs7O21DLEFBRWdCLEdBQUcsQUFDbkI7T0FBSSxFQUFBLEFBQUUsaUJBQU4sQUFBdUIsYUFBYSxBQUNwQztLQUFBLEFBQUUsT0FBRixBQUFTLFVBQVQsQUFBbUIsT0FBbkIsQUFBMEIsQUFDMUI7Ozs7NEIsQUFFUyxHQUFHLEFBQ1o7T0FBTSxRQUFRLFNBQUEsQUFBUyxvQ0FBaUMsRUFBMUMsQUFBNEMsVUFBMUQsQUFDQTtPQUFNLE1BQU0sU0FBQSxBQUFTLG1DQUFnQyxFQUF6QyxBQUEyQyxVQUF2RCxBQUVBOztPQUFLLENBQUwsQUFBTSxPQUFPLEFBQ1o7QUFDQTtBQUVEOztTQUFBLEFBQU0sY0FBTixBQUFvQixBQUNwQjtTQUFBLEFBQU0sQUFDTjtPQUFBLEFBQUksVUFBSixBQUFjLElBQWQsQUFBa0IsQUFDbEI7Ozs7Ozs7QUFJSyxJQUFJLDRCQUFVLElBQWQsQUFBYyxBQUFJOzs7OztBQ3pCekIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIERydW1LaXQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmtleVwiKTtcblx0XHRrZXlzLmZvckVhY2goa2V5ID0+IGtleS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLnJlbW92ZVRyYW5zaXRpb24pKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5wbGF5U291bmQpO1xuXHR9XG5cblx0cmVtb3ZlVHJhbnNpdGlvbihlKSB7XG5cdFx0aWYgKGUucHJvcGVydHlOYW1lICE9PSAndHJhbnNmb3JtJykgcmV0dXJuO1xuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcblx0fVxuXG5cdHBsYXlTb3VuZChlKSB7XG5cdFx0Y29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuXHRcdGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5rZXlbZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcblxuXHRcdGlmICggIWF1ZGlvICl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXVkaW8uY3VycmVudFRpbWUgPSAwO1xuXHRcdGF1ZGlvLnBsYXkoKTtcblx0XHRrZXkuY2xhc3NMaXN0LmFkZChcInBsYXlpbmdcIik7XG5cdH1cblxufVxuXG5leHBvcnQgbGV0IGRydW1raXQgPSBuZXcgRHJ1bUtpdCgpOyIsIi8vIG1haW4uanNcblxuXG5pbXBvcnQgeyBkcnVta2l0IH0gZnJvbSBcIi4vbW9kdWxlcy9kcnVtLWtpdC5qc1wiO1xuXG4vL2ltcG9ydCB7IGN1c3RvbXZpZGVvIH0gZnJvbSBcIi4vbW9kdWxlcy9jdXN0b20tdmlkZW8uanNcIjtcblxuLy9pbXBvcnQgeyBzbGlkZW9uc2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZS1vbi1zY3JvbGwuanNcIjtcblxuLy9pbXBvcnQgeyBtb3VzZXNoYWRvdyB9IGZyb20gXCIuL21vZHVsZXMvbW91c2Utc2hhZG93LmpzXCI7XG5cbi8vaW1wb3J0IHsgd2ViY2FtIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWJjYW0uanNcIjtcblxuXG5cbiJdfQ==
