import { makeAutoObservable } from 'mobx';

export default class InstrumentStore {
	constructor() {
		this._types = [
			// { id: 1, name: 'Акустические гитары' },
			// { id: 2, name: 'Электрогитары' },
			// { id: 3, name: 'Классические гитары' },
			// { id: 4, name: 'Бас-гитары' },
		];
		this._brands = [
			// { id: 1, name: 'Alhambra' },
			// { id: 2, name: 'Cort' },
			// { id: 3, name: 'Fender' },
			// { id: 4, name: 'Gibson' },
			// { id: 5, name: 'Ibanez' },
			// { id: 6, name: 'Taylor' },
		];
		this._instruments = [
			// {id: 1, name: 'Alhambra J-1A', price: 4500, rating: 5, img: 'https://www.tvoyzvuk.by/images/thumbnails/189/189/detailed/40/Alhambra_J-1A.jpg' },
			// {id: 2, name: 'CORT AD810SSB', price: 452, rating: 5, img: 'https://www.tvoyzvuk.by/images/thumbnails/189/189/detailed/37/AD810_SSB_-main-cort.jpg' },
			// {id: 3, name: 'Fender CD-60S Black', price: 838, rating: 5, img: 'https://www.tvoyzvuk.by/images/thumbnails/189/189/detailed/35/1493474017-0961701006_gtr_frt_001_rr.jpg' },
			// {id: 4, name: 'Taylor 210ce', price: 5499, rating: 5, img: 'https://www.tvoyzvuk.by/images/thumbnails/189/189/detailed/40/taylor-210ce-frl-2019.jpg' },
		];
		this._selectedType = {};
		this._selectedBrand = {};
		this._page = 1
		this._totalPage = 0
		this._limit = 1

		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	setInstruments(instruments) {
		this._instruments = instruments;
	}

	setSelectedType(type) {
		this.setPage(1)
		this._selectedType = type;
	}

	setSelectedBrand(brand) {
		this.setPage(1)
		this._selectedBrand = brand;
	}

	setPage(page) {
		this._page = page;
	}

	setTotalPage(totalPage) {
		this._totalPage = totalPage;
	}

	setLimit(limit) {
		this._limit = limit;
	}

	get types() {
		return this._types;
	}

	get brands() {
		return this._brands;
	}
	get instruments() {
		return this._instruments;
	}
	get selectedType() {
		return this._selectedType;
	}
	get selectedBrand() {
		return this._selectedBrand;
	}

	get page() {
		return this._page;
	}
	get totalPage() {
		return this._totalPage;
	}
	get limit() {
		return this._limit;
	}
}
