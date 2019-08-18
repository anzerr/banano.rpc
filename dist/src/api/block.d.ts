import { Api } from '../util/api';
export declare class Block extends Api {
    block: string[];
    constructor(host: string, block: string | string[]);
    account(): Promise<any>;
    confirm(): Promise<any>;
    count(): Promise<any>;
    countType(): Promise<any>;
    info(option?: {
        json_block?: boolean;
        pending?: boolean;
        source?: boolean;
        balance?: boolean;
    }): Promise<any>;
}
