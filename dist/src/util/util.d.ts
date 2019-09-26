import { Valid } from './valid';
import ENUM from './enum';
declare class Util {
    valid: Valid;
    constructor();
    format(data: any, options?: any): any;
}
export declare const util: Util;
export { ENUM };
