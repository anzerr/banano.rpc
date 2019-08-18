
import {Api} from '../util/api';

export class Node extends Api {

	stats(type: string = 'counters'): Promise<any> {
		return this.request({
			type,
			action: 'stats'
		});
	}

	version(): Promise<any> {
		return this.request({action: 'version'});
	}

	uptime(): Promise<any> {
		return this.request({action: 'uptime'});
	}

}
