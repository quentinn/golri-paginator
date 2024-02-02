import React, { FC } from "react";
export type PaginationProps = {
    children?: React.ReactElement;
    pagesCount: number;
    isDisabled?: boolean;
    currentPage: number;
    onPageChange: (page: number) => void;
};
export declare const Pagination: FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map