/// <reference types="react" />
import * as React from "react";
import { Command, LayoutProps } from "../types";
import { MdePreview, MdeEditor } from "../components";
export interface VerticalLayoutOptions {
    displayToggleButtons?: boolean;
    editorClassName?: object | string | Array<object | string>;
    previewClassName?: object | string | Array<object | string>;
}
export declare class VerticalLayout extends React.Component<LayoutProps, {}> {
    state: {
        showCode: boolean;
        showPreview: boolean;
    };
    editorRef: MdeEditor;
    previewRef: MdePreview;
    /**
     * Handler for the textArea value change
     * @memberOf ReactMde
     */
    handleMdeStateChange: (value: any) => void;
    handleCommand: (command: Command) => void;
    handleShowCode: () => void;
    handleShowPreview: () => void;
    /**
     * Renders react-mde
     * @returns
     * @memberOf ReactMde
     */
    render(): JSX.Element;
}
