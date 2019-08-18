"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request = require("request.libary");
const util_1 = require("./util");
const is = require("type.util");
class Api {
    constructor(host) {
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
                return util_1.util.format(data);
            }
        }
        throw new Error('invalid response from rpc');
    }
    request(payload) {
        return new Request(this._host).json(payload).post('/').then((res) => this.handle(res));
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map