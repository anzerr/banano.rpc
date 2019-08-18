
import {Api} from '../util/api';

export class Representatives extends Api {

	all(option?: {count?: number, sorting?: boolean}): Promise<any> {
		return this.request({action: 'representatives', ...(option || {})});
	}

	online(option?: {weight?: boolean}): Promise<any> {
		return this.request({action: 'representatives_online', ...(option || {})});
	}

}
