"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is = require("type.util");
class Valid {
    account(account) {
        return account.match(/^ban_[13][0-9a-z]{59}$/) !== null;
    }
    hash(hash) {
        return hash.match(/^[0-9a-zA-Z]{64}$/) !== null;
    }
}
class Util {
    constructor() {
        this.valid = new Valid();
    }
    format(data) {
        for (const i in data) {
            if (is.string(data[i])) {
                if (data[i] === 'false') {
                    data[i] = false;
                    continue;
                }
                if (data[i] === 'true') {
                    data[i] = true;
                    continue;
                }
                if (data[i].match(/^[0-9]+$/)) {
                    data[i] = Number(data[i]) || 0;
                }
            }
            else {
                if (is.object(data[i])) {
                    data[i] = this.format(data[i]);
                }
            }
        }
        return data;
    }
}
exports.util = new Util();
exports.ENUM = {
    ERROR: {
        INVALID_BLOCK: 'Invalid block format',
        INVALID_SIZE: 'Wrong account/block array size give as param',
        INVALID_ACCOUNT: 'Invalid account format',
    }
};
//# sourceMappingURL=util.js.map