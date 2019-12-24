import { format } from "date-fns";

export declare type ScmDomain = 'product' | 'category';

export class ScmSharedUtil {
    static getCurrentDate() {
        return format(new Date(), 'YYYY-MM-DD');
    }

    static getCurrentTime() {
        return format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    }
}
