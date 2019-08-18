
import {Api} from '../util/api';

export class Bootstrap extends Api {

	status(): Promise<any> {
		return this.request({action: 'bootstrap_status'});
	}

}
