export class tapasList {

	constructor () {

		this.addItems = document.querySelector('.add-items');
		this.itemsList = document.querySelector('.plates');
		this.items = JSON.parse(localStorage.getItem('items')) || [];

		this.addItems.addEventListener('submit', this.addItem);
		this.itemsList.addEventListener('click', this.toggleDone);
		this.populateList(this.items, this.itemsList);

	}

	addItem (e) {
		e.preventDefault();

		const text = (this.querySelector('[name=item]')).value;

		const item = {
			text,
			done: false
		}

		console.log(item);

		tapaslist.items.push(item);

		tapaslist.populateList(tapaslist.items, tapaslist.itemsList);

		localStorage.setItem('items', JSON.stringify(tapaslist.items));

		this.reset();

	}

	toggleDone (e) {

		if (!e.target.matches('input')) return; // skip this unless it's an input

		const element = e.target;
		const index = element.dataset.index;
		tapaslist.items[index].done = !tapaslist.items[index].done;
		localStorage.setItem('items', JSON.stringify(tapaslist.items));

		tapaslist.populateList(tapaslist.items, tapaslist.itemsList);

	}


	populateList (plates = [], platesList) {
		platesList.innerHTML = plates.map((plate, i) => {
			return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
				<label for="item${i}">${plate.text}</label>
			</li>
			`;
		}).join('');
	}

}

export let tapaslist = new tapasList();