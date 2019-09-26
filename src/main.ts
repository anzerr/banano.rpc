
import {Account} from './api/account';
import {Block} from './api/block';
import {Bootstrap} from './api/bootstrap';
import {Confirmation} from './api/confirmation';
import {Network} from './api/network';
import {Node} from './api/node';
import {Frontier} from './api/frontier';
import {Representatives} from './api/representatives';

export class Main {

	private _host: string;
	private _options: {[key: string]: any};

	node: Node;
	network: Network;
	confirmation: Confirmation;
	bootstrap: Bootstrap;
	frontier: Frontier;
	representatives: Representatives;

	constructor(host: string, options?: {[key: string]: any}) {
		this.node = new Node(host, options);
		this.network = new Network(host, options);
		this.confirmation = new Confirmation(host, options);
		this.bootstrap = new Bootstrap(host, options);
		this.frontier = new Frontier(host, options);
		this.representatives = new Representatives(host, options);
		this._host = host;
		this._options = options;
	}

	get host(): string {
		return this._host;
	}

	set host(h) {
		this._host = h;
		this.node.host = h;
		this.network.host = h;
		this.confirmation.host = h;
		this.bootstrap.host = h;
		this.frontier.host = h;
	}

	block(block?: string | string[]): Block {
		return new Block(this._host, block, this._options);
	}

	account(account?: string | string[]): Account {
		return new Account(this._host, account, this._options);
	}

}
