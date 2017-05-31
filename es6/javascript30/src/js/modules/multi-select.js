//--9.0 - Multi-Select Checkboxes---------------------------------------------------//

	const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

	let lastChecked;

	const handleCheck = function (e) {
		console.log(e);

		let inBetween = false;

		if (e.shiftKey && this.checked) {


			checkboxes.forEach(checkbox => {
					console.log(checkbox);

				if (checkbox === this || checkbox === lastChecked){
					inBetween = !inBetween;
					console.log("starting to check them in between");
				}

				if(inBetween){
					checkbox.checked = true;
				}

			});
		}

		lastChecked = this;
	};

	checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));



//----------------------------------------------------------------------------------//