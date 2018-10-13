/// <reference types="react" />
/// <reference types="draft-js" />
import * as React from "react";
import { EditorState } from "draft-js";
export interface Command {
    buttonContent: React.ReactNode;
    buttonProps?: any;
    children?: Command[];
    execute?: (EditorState, data?) => EditorState;
}
