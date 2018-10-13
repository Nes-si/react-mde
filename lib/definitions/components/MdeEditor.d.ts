/// <reference types="draft-js" />
/// <reference types="react" />
import * as React from "react";
import { MdeState } from "../types";
import { Editor, EditorState } from "draft-js";
export interface MdeEditorProps {
    className?: string;
    onChange: (value: EditorState) => void;
    editorRef?: (ref: MdeEditor) => void;
    editorState: MdeState;
    readOnly: boolean;
}
export declare class MdeEditor extends React.Component<MdeEditorProps, {}> {
    editorRef: Editor;
    handleOnChange: (editorState: EditorState) => void;
    handleKeyCommand: (command: any, editorState: any) => "handled" | "not-handled";
    handleTab: (event: any) => void;
    render(): JSX.Element;
}
