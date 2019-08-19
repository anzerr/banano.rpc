"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_libary_1 = require("request.libary");
const util_1 = require("./util");
const type_util_1 = require("type.util");
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
            if (type_util_1.default.object(data) && !type_util_1.default.buffer(data)) {
                return util_1.util.format(data);
            }
        }
        throw new Error('invalid response from rpc');
    }
    request(payload) {
        return new request_libary_1.default(this._host).json(payload).post('/').then((res) => this.handle(res));
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map