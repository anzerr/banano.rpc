import { Account } from './api/account';
import { Block } from './api/block';
import { Bootstrap } from './api/bootstrap';
import { Confirmation } from './api/confirmation';
import { Network } from './api/network';
import { Node } from './api/node';
import { Frontier } from './api/frontier';
import { Representatives } from './api/representatives';
export declare class Main {
    private _host;
    node: Node;
    network: Network;
    confirmation: Confirmation;
    bootstrap: Bootstrap;
    frontier: Frontier;
    representatives: Representatives;
    constructor(host: string);
    host: string;
    block(block?: string | string[]): Block;
    account(account?: string | string[]): Account;
}
