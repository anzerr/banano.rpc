"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmation = void 0;
const api_1 = require("../util/api");
class Confirmation extends api_1.Api {
    active() {
        return this.request({ action: 'confirmation_active' });
    }
    history() {
        return this.request({ action: 'confirmation_history' });
    }
    info(root, option) {
        return this.request(Object.assign({ root: root, action: 'confirmation_info' }, (option || {})));
    }
    quorum(option) {
        return this.request(Object.assign({ action: 'confirmation_quorum' }, (option || {})));
    }
}
exports.Confirmation = Confirmation;
//# sourceMappingURL=confirmation.js.map