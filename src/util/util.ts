
import * as is from 'type.util';

class Valid {

	account(account: string): boolean {
		return account.match(/^ban_[13][0-9a-z]{59}$/) !== null;
	}

	hash(hash: string): boolean {
		return hash.match(/^[0-9a-zA-Z]{64}$/) !== null;
	}

}

class Util {

	valid: Valid;

	constructor() {
		this.valid = new Valid();
	}

	format(data): any {
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
					data[i] = Number(data[i]) || 0;
					continue;
				}
				if (data[i].match(/(?<=\{)\s*[^{]*?(?=[\}])/)) {
					try {
						data[i] = JSON.parse(data[i]);
					} catch (e) {
						// skip
					}
				}
			} else {
				if (is.object(data[i])) {
					data[i] = this.format(data[i]);
				}
			}
		}
		return data;
	}

}

export const util = new Util();
export const ENUM = {
	ERROR: {
		INVALID_BLOCK: 'Invalid block format',
		INVALID_SIZE: 'Wrong account/block array size give as param',
		INVALID_ACCOUNT: 'Invalid account format',
	}
};
