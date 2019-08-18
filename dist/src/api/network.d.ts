import { Api } from '../util/api';
export declare class Network extends Api {
    difficulty(option?: {
        include_trend?: boolean;
    }): Promise<any>;
    supply(): Promise<any>;
    status(): Promise<any>;
    peers(option?: {
        peer_details?: boolean;
    }): Promise<any>;
    representatives(option?: {
        count?: number;
        sorting?: boolean;
    }): Promise<any>;
    representativesOnline(option?: {
        weight?: boolean;
    }): Promise<any>;
}
