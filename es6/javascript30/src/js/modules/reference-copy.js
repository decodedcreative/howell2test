export class referenceCopy {

	constructor() {

		this.players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
		
		// 1) - 
		//this.team = this.players.slice();
		// 2) - 
		//this.team = [].concat(this.players);
		// 3) - //
		this.team = [...this.players];

		this.team[3] = "Thomas";

		console.log(this.team);
		console.log(this.players);

		this.person = {
			name: 'Wes Bos',
			age: 80
		};

		this.person2 = Object.assign({}, this.person, {number: 99, age: 12 });

		console.log(this.person2);

		this.wes = {
			name: 'Wes',
			age: 100,
			social: {
				twitter: '@wesbos',
				facebook: 'wesbos.developer'
			}
		};

		this.dev = Object.assign({}, wes);

		this.dev2 = JSON.parse(JSON.stringify(wes));


	}



}

export let referencecopy = new referenceCopy();