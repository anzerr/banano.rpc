"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const api_1 = require("../util/api");
class Node extends api_1.Api {
    stats(type = 'counters') {
        return this.request({
            type: type,
            action: 'stats'
        });
    }
    version() {
        return this.request({ action: 'version' });
    }
    uptime() {
        return this.request({ action: 'uptime' });
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map