"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MarkdownUtil_1 = require("../util/MarkdownUtil");
var DraftUtil_1 = require("../util/DraftUtil");
var components_1 = require("../components");
exports.quoteCommand = {
    buttonContent: React.createElement(components_1.MdeToolbarIcon, { icon: "quote-right" }),
    buttonProps: { "aria-label": "Insert a quote" },
    execute: function (state) {
        var _a = DraftUtil_1.getMarkdownStateFromDraftState(state), text = _a.text, selection = _a.selection;
        selection = MarkdownUtil_1.selectWordIfCaretIsInsideOne({ text: text, selection: selection });
        var textInsertion;
        textInsertion = MarkdownUtil_1.insertBreaksBeforeSoThatThereIsAnEmptyLineBefore({ text: text, selection: selection });
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        textInsertion = MarkdownUtil_1.insertBefore(text, "> ", selection, false);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        textInsertion = MarkdownUtil_1.insertBreaksAfterSoThatThereIsAnEmptyLineAfter({ text: text, selection: selection });
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        return DraftUtil_1.buildNewDraftState(state, { text: text, selection: selection });
    },
};
