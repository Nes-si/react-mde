/// <reference types="react" />
/// <reference types="draft-js" />
import * as React from "react";
import { Command, GenerateMarkdownPreview, MdeState } from "./types";
import { LayoutMap } from "./LayoutMap";
import { EditorState } from "draft-js";
export interface ReactMdeProps {
    editorState: MdeState;
    className?: string;
    commands?: Command[][];
    onChange: (value: MdeState) => void;
    generateMarkdownPreview?: GenerateMarkdownPreview;
    layout?: keyof LayoutMap;
    layoutOptions?: any;
}
export declare class ReactMde extends React.Component<ReactMdeProps> {
    static defaultProps: Partial<ReactMdeProps>;
    handleOnChange: ({ markdown, html, draftEditorState }: MdeState) => void;
    handleDraftStateChange: (draftEditorState: EditorState) => void;
    onCommand: (command: Command) => void;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
