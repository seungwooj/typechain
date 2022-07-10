interface SStorage<T> {
	[key: string]: T;
}

interface Position {
	(successFn: Function): string;
	(successFn: Function, errorFn: Function): string;
	(successFn: Function, errorFn: Function, optionsObj: Option): string;
}

interface Option {
	enableHighAccuracy: boolean;
	timeout: number;
	maximumAge: number;
}

interface Pos {
	latitude: string;
	longitude: string;
}

interface EError {
	code: string;
	message: string;
}

abstract class LocalStorageAPI<T> {
	constructor(private storage: SStorage<T> = {}) {}
	setItem(key: string, value: T) {
		this.storage[key] = value;
	}
	getItem(key: string) {
		return this.storage[key];
	}
	clearItem(key: string) {
		delete this.storage[key];
	}
	clear() {
		this.storage = {};
	}
}

class GeolocationAPI {
	constructor() {}
	success(pos: Pos) {
		console.log(`Latitude : ${pos.latitude}`);
		console.log(`Longitude: ${pos.longitude}`);
	}
	error(err: EError) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}
	getCurrentPosition(
		successFn: Function,
		errorFn?: Function,
		optionsObj?: Option
	): void {
		if (optionsObj) {
			this.getCurrentPosition(successFn, errorFn, optionsObj);
		} else if (errorFn) {
			this.getCurrentPosition(successFn, errorFn);
		} else {
			this.getCurrentPosition(successFn);
		}
	}

	watchPosition(success: Function, error?: Function, options?: Option): void {
		if (options) {
			this.watchPosition(success, error, options);
		} else if (error) {
			this.watchPosition(success, error);
		} else {
			this.watchPosition(success);
		}
	}
}
