
import {Account} from './api/account';
import {Block} from './api/block';
import {Bootstrap} from './api/bootstrap';
import {Confirmation} from './api/confirmation';
import {Network} from './api/network';
import {Node} from './api/node';

export class Main {

	private _host: string;

	node: Node;
	network: Network;
	confirmation: Confirmation;
	bootstrap: Bootstrap;

	constructor(host: string) {
		this.node = new Node(host);
		this.network = new Network(host);
		this.confirmation = new Confirmation(host);
		this.bootstrap = new Bootstrap(host);
		this._host = host;
	}

	get host() {
		return this._host;
	}

	set host(h) {
		this._host = h;
		this.node.host = h;
		this.network.host = h;
		this.confirmation.host = h;
		this.bootstrap.host = h;
	}

	block(block?: string | string[]): Block {
		return new Block(this._host, block);
	}

	account(account?: string | string[]): Account {
		return new Account(this._host, account);
	}

}
