import { FC } from "react";
import { ButtonProps } from "@chakra-ui/react";
import { IconType, SeparatorPosition } from "../lib/types";
type SeparatorProps = {
    hoverIcon?: IconType;
    jumpSize?: number;
    isDisabled?: boolean;
    separatorPosition?: SeparatorPosition;
};
export declare const PaginationSeparator: FC<SeparatorProps & ButtonProps>;
export {};
//# sourceMappingURL=PaginationSeparator.d.ts.map