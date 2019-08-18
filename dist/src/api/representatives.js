"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../util/api");
class Representatives extends api_1.Api {
    all(option) {
        return this.request(Object.assign({ action: 'representatives' }, (option || {})));
    }
    online(option) {
        return this.request(Object.assign({ action: 'representatives_online' }, (option || {})));
    }
}
exports.Representatives = Representatives;
//# sourceMappingURL=representatives.js.map