"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = void 0;
const api_1 = require("../util/api");
class Network extends api_1.Api {
    difficulty(option) {
        return this.request(Object.assign({ action: 'active_difficulty' }, (option || {})));
    }
    supply() {
        return this.request({ action: 'available_supply' });
    }
    status() {
        return this.request({ action: 'bootstrap_status' });
    }
    peers(option) {
        return this.request(Object.assign({ action: 'peers' }, (option || {})));
    }
    representatives(option) {
        return this.request(Object.assign({ action: 'representatives' }, (option || {})));
    }
    representativesOnline(option) {
        return this.request(Object.assign({ action: 'representatives_online' }, (option || {})));
    }
}
exports.Network = Network;
//# sourceMappingURL=network.js.map