declare class Valid {
    account(account: string): boolean;
    hash(hash: string): boolean;
}
declare class Util {
    valid: Valid;
    constructor();
    format(data: any): any;
}
export declare const util: Util;
export declare const ENUM: {
    ERROR: {
        INVALID_BLOCK: string;
        INVALID_SIZE: string;
        INVALID_ACCOUNT: string;
    };
};
export {};
