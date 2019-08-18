import { Api } from '../util/api';
export declare class Frontier extends Api {
    count(): Promise<any>;
    get(account: string[], option?: {
        count?: number;
    }): Promise<any>;
}
