"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frontier = void 0;
const api_1 = require("../util/api");
class Frontier extends api_1.Api {
    count() {
        return this.request({ action: 'frontier_count' });
    }
    get(option) {
        return this.request(Object.assign({ action: 'frontiers' }, (option || {})));
    }
}
exports.Frontier = Frontier;
//# sourceMappingURL=frontier.js.map