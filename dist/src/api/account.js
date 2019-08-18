"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../util/api");
const util_1 = require("../util/util");
class Account extends api_1.Api {
    constructor(host, account) {
        super(host);
        this.account = Array.isArray(account) ? account : [account];
        for (let i in this.account) {
            if (!util_1.util.valid.account(this.account[i])) {
                throw new Error(util_1.ENUM.ERROR.INVALID_ACCOUNT);
            }
        }
    }
    balance() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'account_balance',
            account: this.account[0]
        });
    }
    block() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'account_block_count',
            account: this.account[0]
        });
    }
    history(option) {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request(Object.assign({ action: 'account_history', account: this.account[0] }, (option || {})));
    }
    info(option) {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request(Object.assign({ action: 'account_info', account: this.account[0] }, (option || {})));
    }
    key() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'account_key',
            account: this.account[0]
        });
    }
    representative() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'account_representative',
            account: this.account[0]
        });
    }
    weight() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'account_weight',
            account: this.account[0]
        });
    }
    balances() {
        if (this.account.length === 0) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'accounts_balances',
            account: this.account
        }).then((res) => {
            for (let i in res.balances) {
                res.balances[i] = { balance: Number(res.balances[i].balance), pending: Number(res.balances[i].pending) };
            }
            return res;
        });
    }
    frontiers() {
        if (this.account.length === 0) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'accounts_frontiers',
            account: this.account
        });
    }
    pending(option) {
        if (this.account.length === 0) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request(Object.assign({ action: 'accounts_pending', account: this.account }, (option || {})));
    }
    delegators() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'delegators',
            account: this.account[0]
        });
    }
    delegatorsCount() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'delegators_count',
            account: this.account[0]
        });
    }
    validate() {
        if (this.account.length !== 1) {
            return Promise.reject(util_1.ENUM.ERROR.INVALID_SIZE);
        }
        return this.request({
            action: 'validate_account_number',
            account: this.account[0]
        });
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map