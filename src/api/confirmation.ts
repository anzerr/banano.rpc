
import {Api} from '../util/api';

export class Confirmation extends Api {

	active(): Promise<any> {
		return this.request({action: 'confirmation_active'});
	}

	history(): Promise<any> {
		return this.request({action: 'confirmation_history'});
	}

	info(root: string, option?: {json_block?: boolean, contents?: boolean, representatives?: boolean}): Promise<any> {
		return this.request({
			root,
			action: 'confirmation_info',
			...(option || {})
		});
	}

	quorum(option?: {peer_details?: boolean, peers_stake_required?: boolean}): Promise<any> {
		return this.request({action: 'confirmation_quorum', ...(option || {})});
	}

}
