
import {Api} from '../util/api';

export class Frontier extends Api {

	count(): Promise<any> {
		return this.request({action: 'frontier_count'});
	}

	get(option?: {account?: string; count?: number}): Promise<any> {
		return this.request({action: 'frontiers', ...(option || {})});
	}

}
