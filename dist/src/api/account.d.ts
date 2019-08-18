import { Api } from '../util/api';
export declare class Account extends Api {
    private account;
    constructor(host: string, account: string | string[]);
    balance(): Promise<{
        balance: number;
        pending: number;
    }>;
    block(): Promise<{
        block_count: number;
    }>;
    history(option?: {
        count?: number;
        raw?: boolean;
        head?: string;
        reverse: string;
        account_filter: string[];
    }): Promise<any>;
    info(option?: {
        representative?: boolean;
        weight?: boolean;
        pending?: boolean;
    }): Promise<any>;
    key(): Promise<any>;
    representative(): Promise<any>;
    weight(): Promise<any>;
    balances(): Promise<any>;
    frontiers(): Promise<any>;
    pending(option?: {
        count?: number;
        threshold?: string;
        source?: boolean;
        include_active?: boolean;
        include_only_confirmed?: boolean;
    }): Promise<any>;
    delegators(): Promise<any>;
    delegatorsCount(): Promise<any>;
    validate(): Promise<any>;
}
