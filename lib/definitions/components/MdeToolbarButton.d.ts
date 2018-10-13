/// <reference types="react" />
import * as React from "react";
export interface MdeToolbarButtonProps {
    buttonContent: React.ReactNode;
    buttonProps: any;
    onClick: React.MouseEventHandler<any>;
}
export declare const MdeToolbarButton: React.SFC<MdeToolbarButtonProps>;
