import { Column, OperatorString, SearchTerm } from './../models/index';
export interface FilterCallbackArg {
    columnDef: Column;
    operator?: OperatorString;
    searchTerm?: SearchTerm;
    searchTerms?: SearchTerm[];
}
export declare type FilterCallback = (e: Event | undefined, args: FilterCallbackArg) => void;
