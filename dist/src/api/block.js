"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../util/api");
const util_1 = require("../util/util");
class Block extends api_1.Api {
    constructor(host, block) {
        super(host);
        if (block) {
            this.block = Array.isArray(block) ? block : [block];
        }
        else {
            this.block = [];
        }
        for (const i in this.block) {
            if (!util_1.util.valid.hash(this.block[i])) {
                throw new Error(util_1.ENUM.ERROR.INVALID_BLOCK);
            }
        }
    }
    account() {
        if (this.block.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'block_account',
            hash: this.block[0]
        });
    }
    confirm() {
        if (this.block.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'block_confirm',
            hash: this.block[0]
        });
    }
    count(option) {
        if (this.block.length !== 0) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request(Object.assign({ action: 'block_count' }, (option || {})));
    }
    countType() {
        if (this.block.length !== 0) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({ action: 'block_count_type' });
    }
    info(option) {
        if (this.block.length === 0) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        if (this.block.length !== 1) {
            return this.request(Object.assign({ action: 'blocks_info', hashes: this.block }, (option || {})));
        }
        return this.request(Object.assign({ action: 'block_info', hash: this.block[0] }, (option || {})));
    }
}
exports.Block = Block;
//# sourceMappingURL=block.js.map