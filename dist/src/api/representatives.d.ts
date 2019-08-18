import { Api } from '../util/api';
export declare class Representatives extends Api {
    all(option?: {
        count?: number;
        sorting?: boolean;
    }): Promise<any>;
    online(option?: {
        weight?: boolean;
    }): Promise<any>;
}
