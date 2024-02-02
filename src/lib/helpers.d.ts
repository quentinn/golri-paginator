type Arguments = {
    pagesCount?: number;
    innerLimit: number;
    outerLimit: number;
    currentPage: number;
};
export declare const getFirstItem: <T>(array: T[]) => T;
export declare const getLastItem: <T>(array: T[]) => T;
export declare const isDecimalNumber: (number: number) => boolean;
export declare const generatePages: ({ pagesCount, currentPage, innerLimit, outerLimit, }: Arguments) => number[];
export {};
//# sourceMappingURL=helpers.d.ts.map