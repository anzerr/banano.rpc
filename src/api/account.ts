
import {Api} from '../util/api';
import {util, ENUM} from '../util/util';

export class Account extends Api {

	private account: string[];

	constructor(host: string, account?: string | string[]) {
		super(host);
		if (account) {
			this.account = Array.isArray(account) ? account : [account];
		} else {
			this.account = [];
		}
		for (const i in this.account) {
			if (!util.valid.account(this.account[i])) {
				throw new Error(ENUM.ERROR.INVALID_ACCOUNT);
			}
		}
	}

	balance(): Promise<{balance: number; pending: number}> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_balance',
			account: this.account[0]
		});
	}

	block(): Promise<{block_count: number}> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_block_count',
			account: this.account[0]
		});
	}

	history(option?: {count?: number; raw?: boolean; head?: string; reverse?: string; account_filter?: string[]}): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_history',
			account: this.account[0],
			...(option || {})
		});
	}

	info(option?: {representative?: boolean; weight?: boolean; pending?: boolean}): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_info',
			account: this.account[0],
			...(option || {})
		});
	}

	key(): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_key',
			account: this.account[0]
		});
	}

	representative(): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_representative',
			account: this.account[0]
		});
	}

	weight(): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'account_weight',
			account: this.account[0]
		});
	}

	balances(): Promise<any> {
		if (this.account.length === 0) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'accounts_balances',
			account: this.account
		}).then((res) => {
			for (const i in res.balances) {
				res.balances[i] = {balance: Number(res.balances[i].balance), pending: Number(res.balances[i].pending)};
			}
			return res;
		});
	}

	frontiers(): Promise<any> {
		if (this.account.length === 0) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'accounts_frontiers',
			account: this.account
		});
	}

	pending(option?: {count?: number; threshold?: string; source?: boolean; include_active?: boolean; include_only_confirmed?: boolean}): Promise<any> {
		if (this.account.length === 0) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'accounts_pending',
			account: this.account,
			...(option || {})
		});
	}

	delegators(): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'delegators',
			account: this.account[0]
		});
	}

	delegatorsCount(): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'delegators_count',
			account: this.account[0]
		});
	}

	validate(): Promise<any> {
		if (this.account.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'validate_account_number',
			account: this.account[0]
		});
	}

}
