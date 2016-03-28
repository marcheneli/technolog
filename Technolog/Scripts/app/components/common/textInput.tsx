/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import InputError from "./inputError";

interface ITextInputProps {
    name: string,
    onChange(e): void,
    register(input): void,
    validate(text: string): void,
    value: string,
    errorMessage: string,
    emptyMessage: string,
    minCharacters: string,
    required: boolean,
    text: string,
    uniqueName: string
}

interface ITextInputState {
    isEmpty: boolean,
    errorVisible: boolean,
    value: string,
    valid: boolean,
    errorMessage: string
}

export default class TextInput extends React.Component<ITextInputProps, ITextInputState> {
    getInitialState() {
        //most of these variables have to do with handling errors
        return {
            isEmpty: true,
            value: this.props.value,
            valid: false,
            errorMessage: "Input is invalid",
            errorVisible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isEmpty: true,
            value: nextProps.value,
            valid: false,
            errorMessage: "Input is invalid",
            errorVisible: false
        });
    }

    private handleChange(event) {
        //validate the field locally
        this.validation(event.target.value);

        //Call onChange method on the parent component for updating it's state
        //If saving this field for final form submission, it gets passed
        // up to the top component for sending to the server
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    componentDidMount() {
        this.props.register(this);
    }

    private validation(value, valid?) {
        //The valid variable is optional, and true if not passed in:
        if (typeof valid === 'undefined') {
            valid = true;
        }

        var message = "";
        var errorVisible = false;

        //we know how to validate text fields based on information passed through props
        if (!valid) {
            //This happens when the user leaves the field, but it is not valid
            //(we do final validation in the parent component, then pass the result
            //here for display)
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }
        else if (this.props.required && jQuery.isEmptyObject(value)) {
            //this happens when we have a required field with no text entered
            //in this case, we want the "emptyMessage" error message
            message = this.props.emptyMessage;
            valid = false;
            errorVisible = true;
        }
        else if (value.length < this.props.minCharacters) {
            //This happens when the text entered is not the required length,
            //in which case we show the regular error message
            message = this.props.errorMessage;
            valid = false;
            errorVisible = true;
        }

        //setting the state will update the display,
        //causing the error message to display if there is one.
        this.setState({
            value: value,
            isEmpty: jQuery.isEmptyObject(value),
            valid: valid,
            errorMessage: message,
            errorVisible: errorVisible
        });

    }

    handleBlur(event) {
        //Complete final validation from parent element when complete
        var valid = this.props.validate(event.target.value);
        //pass the result to the local validation element for displaying the error
        this.validation(event.target.value, valid);
    }
    render(): React.ReactElement<ITextInputProps> {
        return (
            <div className={this.props.uniqueName}>
                <input className='form-control'
                    placeholder={this.props.text}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value} />

                {this.state.errorVisible ?
                    <InputError errorMessage={this.state.errorMessage} /> : null
                }
            </div>
        );
    }
}
