"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../util/api");
class Bootstrap extends api_1.Api {
    status() {
        return this.request({ action: 'bootstrap_status' });
    }
}
exports.Bootstrap = Bootstrap;
//# sourceMappingURL=bootstrap.js.map