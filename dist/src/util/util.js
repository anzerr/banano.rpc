"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM = exports.util = void 0;
const type_util_1 = require("type.util");
const valid_1 = require("./valid");
const enum_1 = require("./enum");
exports.ENUM = enum_1.default;
class Util {
    constructor() {
        this.valid = new valid_1.Valid();
    }
    format(data, options = {}) {
        for (const i in data) {
            if (type_util_1.default.string(data[i])) {
                if (data[i] === 'false') {
                    data[i] = false;
                    continue;
                }
                if (data[i] === 'true') {
                    data[i] = true;
                    continue;
                }
                if (data[i].match(/^[0-9]+$/)) {
                    if (options.number === 'raw') {
                        continue;
                    }
                    data[`${i}_raw`] = data[i];
                    if (options.number === 'bigInt') {
                        data[i] = BigInt(data[i]) || 0; // eslint-disable-line
                        continue;
                    }
                    if (type_util_1.default.function(options.number)) {
                        data[i] = options.number(data[i]);
                        continue;
                    }
                    data[i] = parseInt(data[i], 10) || 0;
                    continue;
                }
                if (data[i].match(/(?<=\{)\s*[^{]*?(?=[\}])/)) {
                    try {
                        data[i] = JSON.parse(data[i]);
                    }
                    catch (e) {
                        // skip
                    }
                    if (type_util_1.default.object(data[i])) {
                        data[i] = this.format(data[i], options);
                    }
                }
            }
            else {
                if (type_util_1.default.object(data[i])) {
                    data[i] = this.format(data[i], options);
                }
            }
        }
        return data;
    }
}
exports.util = new Util();
//# sourceMappingURL=util.js.map