import { makeAutoObservable } from 'mobx'

export default class InstrumentStore {
	constructor() {
	this._types = []
	this._brands = []
	this._instruments = []
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setInstruments(instruments) {
		this._instruments = instruments
	}

	get types() {
return this._types
	}
	
	get brands() {
		return this._brands
	
	}
	get instruments() {
		return this._instruments
	}
}
