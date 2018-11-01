import * as React from "react";
import ReactMde, {ReactMdeTypes} from "../src";
import * as Showdown from "showdown";
import {HorizontalLayoutOptions} from "../src/components-layout";

export interface AppState {
    mdeState: ReactMdeTypes.MdeState;
}

export class App extends React.Component<{}, AppState> {

    converter: Showdown.Converter;

    constructor(props) {
        super(props);
        this.state = {
            mdeState: {
                markdown: "**Hello world!!!**",
            },
        };
        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true,
        });
    }

    handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
        this.setState({mdeState});
    }

    render() {
        return (
            <div className="container">
                <ReactMde
                    onChange={this.handleValueChange}
                    layout="horizontal"
                    layoutOptions={{
                        displayToggleButtons: true,
                    } as HorizontalLayoutOptions}
                    editorState={this.state.mdeState}
                    generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                />
            </div>
        );
    }
}
