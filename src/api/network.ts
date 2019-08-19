
import {Api} from '../util/api';

export class Network extends Api {

	difficulty(option?: {include_trend?: boolean}): Promise<any> {
		return this.request({action: 'active_difficulty', ...(option || {})});
	}

	supply(): Promise<any> {
		return this.request({action: 'available_supply'});
	}

	status(): Promise<any> {
		return this.request({action: 'bootstrap_status'});
	}

	peers(option?: {peer_details?: boolean}): Promise<any> {
		return this.request({action: 'peers', ...(option || {})});
	}

	representatives(option?: {count?: number; sorting?: boolean}): Promise<any> {
		return this.request({action: 'representatives', ...(option || {})});
	}

	representativesOnline(option?: {weight?: boolean}): Promise<any> {
		return this.request({action: 'representatives_online', ...(option || {})});
	}

}
