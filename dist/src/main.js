"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const account_1 = require("./api/account");
const block_1 = require("./api/block");
const bootstrap_1 = require("./api/bootstrap");
const confirmation_1 = require("./api/confirmation");
const network_1 = require("./api/network");
const node_1 = require("./api/node");
const frontier_1 = require("./api/frontier");
const representatives_1 = require("./api/representatives");
class Main {
    constructor(host, options) {
        this.node = new node_1.Node(host, options);
        this.network = new network_1.Network(host, options);
        this.confirmation = new confirmation_1.Confirmation(host, options);
        this.bootstrap = new bootstrap_1.Bootstrap(host, options);
        this.frontier = new frontier_1.Frontier(host, options);
        this.representatives = new representatives_1.Representatives(host, options);
        this._host = host;
        this._options = options;
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
        this.frontier.host = h;
    }
    block(block) {
        return new block_1.Block(this._host, block, this._options);
    }
    account(account) {
        return new account_1.Account(this._host, account, this._options);
    }
}
exports.Main = Main;
//# sourceMappingURL=main.js.map