import { Dispatch, SetStateAction } from "react";
type InitialState = {
    currentPage: number;
    pageSize?: number;
    isDisabled?: boolean;
};
type Limits = {
    inner: number;
    outer: number;
};
type UsePagination = {
    initialState: InitialState;
    total?: number;
    pagesCount?: number;
    limits?: Limits;
};
export declare const usePagination: ({ total, initialState, pagesCount: pagesCountProp, limits, }: UsePagination) => {
    offset: number;
    pages: number[];
    pagesCount: number;
    currentPage: number;
    pageSize: number;
    isDisabled: boolean;
    setPageSize: Dispatch<SetStateAction<number>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
};
export {};
//# sourceMappingURL=usePagination.d.ts.map