
import is from 'type.util';
import {Valid} from './valid';
import ENUM from './enum';

declare const BigInt: any // eslint-disable-line

class Util {

	valid: Valid;

	constructor() {
		this.valid = new Valid();
	}

	format(data, options: any = {}): any {
		for (const i in data) {
			if (is.string(data[i])) {
				if (data[i] === 'false') {
					data[i] = false;
					continue;
				}
				if (data[i] === 'true') {
					data[i] = true;
					continue;
				}
				if (data[i].match(/^[0-9]+$/)) {
					if (options.number === 'raw') {
						continue;
					}
					data[`${i}_raw`] = data[i];
					if (options.number === 'bigInt') {
						data[i] = BigInt(data[i]) || 0; // eslint-disable-line
						continue;
					}
					if (is.function(options.number)) {
						data[i] = options.number(data[i]);
						continue;
					}
					data[i] = parseInt(data[i], 10) || 0;
					continue;
				}
				if (data[i].match(/(?<=\{)\s*[^{]*?(?=[\}])/)) {
					try {
						data[i] = JSON.parse(data[i]);
					} catch (e) {
						// skip
					}
					if (is.object(data[i])) {
						data[i] = this.format(data[i], options);
					}
				}
			} else {
				if (is.object(data[i])) {
					data[i] = this.format(data[i], options);
				}
			}
		}
		return data;
	}

}

export const util = new Util();
export {ENUM};
