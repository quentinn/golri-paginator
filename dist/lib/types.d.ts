import React from "react";
interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type SeparatorPosition = "left" | "right";
export type IconType = (props: IconBaseProps) => React.ReactElement;
export {};
//# sourceMappingURL=types.d.ts.map