"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Valid = void 0;
const type_util_1 = require("type.util");
class Valid {
    account(account) {
        return type_util_1.default.string(account) && account.match(/^ban_[13][0-9a-z]{59}$/) !== null;
    }
    hash(hash) {
        return type_util_1.default.string(hash) && hash.match(/^[0-9a-zA-Z]{64}$/) !== null;
    }
}
exports.Valid = Valid;
//# sourceMappingURL=valid.js.map