/// <reference types="draft-js" />
import { EditorState, ContentState, SelectionState } from "draft-js";
import { MarkdownState } from "../types/MarkdownState";
import { GenerateMarkdownPreview, MdeState, TextSelection } from "../types";
export declare function getContentLengthOfAllBlocksBefore(editorState: any, key: any): number;
export declare function getSelection(editorState: any): TextSelection;
export declare function getContentLengthBetween(editorState: any, startKey: any, startOffset: any, endKey: any, endOffset: any): number;
export declare function getPlainText(editorState: EditorState): string;
export declare function buildSelectionState(contentState: ContentState, selection: TextSelection): SelectionState;
export declare function getMarkdownStateFromDraftState(editorState: EditorState): MarkdownState;
export declare function getMdeStateFromDraftState(editorState: EditorState, generateMarkdownPreview: GenerateMarkdownPreview): Promise<MdeState>;
export declare function buildNewDraftState(currentState: EditorState, markdownState: MarkdownState): EditorState;
export declare function buildNewMdeState(currentState: MdeState, generateMarkdownPreview: GenerateMarkdownPreview, newText: string, newSelection?: TextSelection): Promise<MdeState>;
