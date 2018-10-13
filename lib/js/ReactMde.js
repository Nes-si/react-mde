"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var commands_1 = require("./commands");
var LayoutMap_1 = require("./LayoutMap");
var draft_js_1 = require("draft-js");
var DraftUtil_1 = require("./util/DraftUtil");
var ReactMde = /** @class */ (function (_super) {
    __extends(ReactMde, _super);
    function ReactMde() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnChange = function (_a) {
            var markdown = _a.markdown, html = _a.html, draftEditorState = _a.draftEditorState;
            var onChange = _this.props.onChange;
            onChange({ markdown: markdown, html: html, draftEditorState: draftEditorState });
        };
        _this.handleDraftStateChange = function (draftEditorState) {
            var generateMarkdownPreview = _this.props.generateMarkdownPreview;
            DraftUtil_1.getMdeStateFromDraftState(draftEditorState, generateMarkdownPreview)
                .then(function (mdeState) {
                _this.handleOnChange({
                    html: mdeState.html,
                    markdown: mdeState.markdown,
                    draftEditorState: draftEditorState,
                });
            });
        };
        _this.onCommand = function (command) {
            var draftEditorState = _this.props.editorState.draftEditorState;
            _this.handleDraftStateChange(command.execute(draftEditorState));
        };
        return _this;
    }
    ReactMde.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, editorState, generateMarkdownPreview, newEditorState, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, editorState = _a.editorState, generateMarkdownPreview = _a.generateMarkdownPreview;
                        if (!editorState || editorState.draftEditorState)
                            return [2 /*return*/];
                        newEditorState = {
                            html: editorState.html,
                            markdown: editorState.markdown,
                            draftEditorState: draft_js_1.EditorState.createWithContent(draft_js_1.ContentState.createFromText(editorState.markdown)),
                        };
                        if (!(newEditorState.markdown && !newEditorState.html && generateMarkdownPreview != null)) return [3 /*break*/, 2];
                        _b = newEditorState;
                        return [4 /*yield*/, generateMarkdownPreview(newEditorState.markdown)];
                    case 1:
                        _b.html = _c.sent();
                        _c.label = 2;
                    case 2:
                        this.handleOnChange(newEditorState);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReactMde.prototype.render = function () {
        var Layout = LayoutMap_1.layoutMap[this.props.layout];
        var _a = this.props, commands = _a.commands, layoutOptions = _a.layoutOptions, className = _a.className;
        var editorState = this.props.editorState;
        if (!editorState || !editorState.draftEditorState) {
            editorState = {
                html: "",
                markdown: "",
                draftEditorState: draft_js_1.EditorState.createEmpty(),
            };
        }
        return (React.createElement("div", { className: "react-mde " + (className || "") },
            React.createElement(Layout, { onChange: this.handleDraftStateChange, onCommand: this.onCommand, commands: commands, layoutOptions: layoutOptions, mdeEditorState: editorState })));
    };
    ReactMde.defaultProps = {
        commands: commands_1.getDefaultCommands(),
        layout: "vertical",
    };
    return ReactMde;
}(React.Component));
exports.ReactMde = ReactMde;
