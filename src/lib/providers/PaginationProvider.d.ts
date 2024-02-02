import React, { FC, Dispatch, SetStateAction } from "react";
export type PaginationContextValues = {
    state: {
        isDisabled: boolean;
        pagesCount: number;
        currentPage: number;
    };
    actions: {
        setCurrentPage: Dispatch<SetStateAction<number>>;
        setIsDisabled: Dispatch<SetStateAction<boolean>>;
        changePage: (page: number) => void;
    };
};
export declare const PaginationContext: React.Context<PaginationContextValues>;
export type PaginationProviderProps = {
    children?: React.ReactElement;
    isDisabled: boolean;
    pagesCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};
export declare const PaginationProvider: FC<PaginationProviderProps>;
//# sourceMappingURL=PaginationProvider.d.ts.map