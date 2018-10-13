"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MarkdownUtil_1 = require("../util/MarkdownUtil");
var DraftUtil_1 = require("../util/DraftUtil");
var components_1 = require("../components");
exports.unorderedListCommand = {
    buttonContent: React.createElement(components_1.MdeToolbarIcon, { icon: "list-ul" }),
    buttonProps: { "aria-label": "Insert a bulleted list" },
    execute: function (state) {
        var mdState = DraftUtil_1.getMarkdownStateFromDraftState(state);
        mdState = MarkdownUtil_1.makeList(mdState, "- ");
        return DraftUtil_1.buildNewDraftState(state, mdState);
    },
};
