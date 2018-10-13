"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MarkdownUtil_1 = require("../util/MarkdownUtil");
var DraftUtil_1 = require("../util/DraftUtil");
var components_1 = require("../components");
exports.italicCommand = {
    buttonContent: React.createElement(components_1.MdeToolbarIcon, { icon: "italic" }),
    buttonProps: { "aria-label": "Add italic text" },
    execute: function (state) {
        var mdState = DraftUtil_1.getMarkdownStateFromDraftState(state);
        mdState = MarkdownUtil_1.insertBeforeAndAfter(mdState, "_");
        return DraftUtil_1.buildNewDraftState(state, mdState);
    },
};
