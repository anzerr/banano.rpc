"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./api/account");
const block_1 = require("./api/block");
const bootstrap_1 = require("./api/bootstrap");
const confirmation_1 = require("./api/confirmation");
const network_1 = require("./api/network");
const node_1 = require("./api/node");
class Main {
    constructor(host) {
        this.node = new node_1.Node(host);
        this.network = new network_1.Network(host);
        this.confirmation = new confirmation_1.Confirmation(host);
        this.bootstrap = new bootstrap_1.Bootstrap(host);
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
    block(block) {
        return new block_1.Block(this._host, block);
    }
    account(account) {
        return new account_1.Account(this._host, account);
    }
}
exports.Main = Main;
//# sourceMappingURL=main.js.map