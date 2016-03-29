///< reference path="../../../typings/tsd.d.ts"/>

import * as React from "react";

interface ISearchInputProps {
    onChange(text: string): void,
    text: string
}

export default class SearchInput extends React.Component<ISearchInputProps, {}> {
    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }
    render(): React.ReactElement<ISearchInputProps> {
        return (
            <input className='form-control'
                placeholder={this.props.text}
                onChange={this.handleChange} />
        )
    }
}