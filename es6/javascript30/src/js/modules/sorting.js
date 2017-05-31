export class sortBands {

	constructor() {

        this.bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
        this.sortedbands = this.bands.sort((a,b) => this.strip(a) > this.strip(b) ? 1 : -1);

        document.querySelector("#bands").innerHTML = 
            this.sortedbands
                .map(band => `<li>${band}</li>`)
                .join('');

	}


    strip(bandName) {
        return bandName.replace(/^(a |the |an )/i, '').trim();
    }




}

export let sortdata = new sortBands();