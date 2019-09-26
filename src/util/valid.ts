
import is from 'type.util';

export class Valid {

	account(account: string): boolean {
		return is.string(account) && account.match(/^ban_[13][0-9a-z]{59}$/) !== null;
	}

	hash(hash: string): boolean {
		return is.string(hash) && hash.match(/^[0-9a-zA-Z]{64}$/) !== null;
	}

}
