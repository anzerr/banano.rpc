
import * as Request from 'request.libary';
import {util} from './util';
import * as is from 'type.util';

export class Api {

	private _host: string;

	constructor(host: string) {
		this._host = host;
	}

	get host() {
		return this._host;
	}

	set host(h) {
		this._host = h;
	}

	handle(res) {
		if (res.isOkay()) {
			const data = res.parse();
			if (is.object(data) && !is.buffer(data)) {
				return util.format(data);
			}
		}
		throw new Error('invalid response from rpc');
	}

	request(payload: any) {
		return new Request(this._host).json(payload).post('/').then((res) => this.handle(res));
	}

}
