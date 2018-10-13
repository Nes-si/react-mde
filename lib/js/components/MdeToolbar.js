"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MdeToolbarButtonGroup_1 = require("./MdeToolbarButtonGroup");
var MdeToolbarDropdown_1 = require("./MdeToolbarDropdown");
var MdeToolbarButton_1 = require("./MdeToolbarButton");
exports.MdeToolbar = function (_a) {
    var children = _a.children, commands = _a.commands, onCommand = _a.onCommand;
    if ((!commands || commands.length === 0) && !children) {
        return null;
    }
    return (React.createElement("div", { className: "mde-header" },
        commands.map(function (cg, i) { return (React.createElement(MdeToolbarButtonGroup_1.MdeToolbarButtonGroup, { key: i }, cg.map(function (c, j) {
            if (c.children) {
                return (React.createElement(MdeToolbarDropdown_1.MdeToolbarDropdown, { key: j, buttonProps: c.buttonProps, buttonContent: c.buttonContent, commands: c.children, onCommand: function (cmd) { return onCommand(cmd); } }));
            }
            return React.createElement(MdeToolbarButton_1.MdeToolbarButton, { key: j, buttonContent: c.buttonContent, buttonProps: c.buttonProps, onClick: function () { return onCommand(c); } });
        }))); }),
        React.createElement("div", { className: "mde-toolbar-children" }, children)));
};
