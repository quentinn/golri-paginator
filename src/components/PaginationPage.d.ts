import { FC, ReactElement } from "react";
import { ButtonProps } from "@chakra-ui/react";
export type PageProps = {
    page: number;
    separator?: ReactElement<ButtonProps>;
    _current?: ButtonProps;
};
export declare const PaginationPage: FC<PageProps & ButtonProps>;
//# sourceMappingURL=PaginationPage.d.ts.map