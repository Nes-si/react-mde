"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MarkdownUtil_1 = require("../util/MarkdownUtil");
var DraftUtil_1 = require("../util/DraftUtil");
var components_1 = require("../components");
exports.imageCommand = {
    buttonContent: React.createElement(components_1.MdeToolbarIcon, { icon: "image" }),
    buttonProps: { "aria-label": "Insert a picture" },
    execute: function (state) {
        var _a = DraftUtil_1.getMarkdownStateFromDraftState(state), text = _a.text, selection = _a.selection;
        var _b = MarkdownUtil_1.insertText(text, "![", selection.start), newText = _b.newText, insertionLength = _b.insertionLength;
        var finalText = MarkdownUtil_1.insertText(newText, "](image-url)", selection.end + insertionLength).newText;
        return DraftUtil_1.buildNewDraftState(state, {
            text: finalText,
            selection: {
                start: selection.start + insertionLength,
                end: selection.end + insertionLength,
            },
        });
    },
};
