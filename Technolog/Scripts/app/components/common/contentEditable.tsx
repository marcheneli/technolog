/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

interface IContentEditableProps {
    onChange(text: string);
    html: string;
}

interface IContentEditableState {

}

export default class ContentEditable extends React.Component<IContentEditableProps, IContentEditableState> {
    private onContentChange = (): void => {
        this.props.onChange(ReactDOM.findDOMNode(this).innerHTML);
    }
    render(): React.ReactElement<IContentEditableProps> {
        return (
            <div
                className="edit"
                contentEditable
                dangerouslySetInnerHTML={{ __html: this.props.html }}
                onInput={this.onContentChange}
                style={{ height: 100 + '%', width: 100 + '%', margin: 0, padding: 0, textAlign: 'center'}}>
            </div>
        );
    }
}