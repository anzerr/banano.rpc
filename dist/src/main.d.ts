import { Account } from './api/account';
import { Block } from './api/block';
import { Bootstrap } from './api/bootstrap';
import { Confirmation } from './api/confirmation';
import { Network } from './api/network';
import { Node } from './api/node';
export declare class Main {
    private _host;
    node: Node;
    network: Network;
    confirmation: Confirmation;
    bootstrap: Bootstrap;
    constructor(host: string);
    host: string;
    block(block: string | string[]): Block;
    account(account: string | string[]): Account;
}
