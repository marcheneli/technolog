import * as React from 'react';

export default function TextAreaInput(props: any) {
    return (
        <textarea
            className="form-control"
            rows="5"
            cols="50"
            onChange={() => { } }
            value={props.text}></textarea>
    );
}