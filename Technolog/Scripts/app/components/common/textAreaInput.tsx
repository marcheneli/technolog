/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface ITextAreaInputProps {
    text: string;
}

interface ITextAreaInputState {

}

export default class TextAreaInput extends React.Component<ITextAreaInputProps, ITextAreaInputState> {
    render(): React.ReactElement<ITextAreaInputProps> {
        return (
            <textarea className="form-control" rows="5" cols="50" onChange={() => { }} value={this.props.text}></textarea>        
        );
    }
}
