
import {Api} from '../util/api';
import {util, ENUM} from '../util/util';

export class Block extends Api {

	block: string[];

	constructor(host: string, block?: string | string[], options?: {[key: string]: any}) {
		super(host, options);
		if (block) {
			this.block = Array.isArray(block) ? block : [block];
		} else {
			this.block = [];
		}
		for (const i in this.block) {
			if (!util.valid.hash(this.block[i])) {
				throw new Error(ENUM.ERROR.INVALID_BLOCK);
			}
		}
	}

	account(): Promise<any> {
		if (this.block.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'block_account',
			hash: this.block[0]
		});
	}

	confirm(): Promise<any> {
		if (this.block.length !== 1) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({
			action: 'block_confirm',
			hash: this.block[0]
		});
	}

	count(option?: {include_cemented?: boolean}): Promise<any> {
		if (this.block.length !== 0) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({action: 'block_count', ...(option || {})});
	}

	countType(): Promise<any> {
		if (this.block.length !== 0) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		return this.request({action: 'block_count_type'});
	}

	info(option?: {json_block?: boolean; pending?: boolean; source?: boolean; balance?: boolean}): Promise<any> {
		if (this.block.length === 0) {
			return Promise.reject(ENUM.ERROR.INVALID_SIZE);
		}
		if (this.block.length !== 1) {
			return this.request({
				action: 'blocks_info',
				hashes: this.block,
				...(option || {})
			});
		}
		return this.request({
			action: 'block_info',
			hash: this.block[0],
			...(option || {})
		});
	}

}
