import * as React from 'react';
import ToolTable from '../containers/ToolTable';

interface IToolListProps {
    id: number;
    onMount();
}

export default class ToolList extends React.Component<IToolListProps, {}> {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <div style={{
                position: 'relative',
                display: 'flex',
                flexGrow: 2,
                flexBasis: 0 + '%',
                minHeight: 0, minWidth: 0
            }}>
                <ToolTable id={this.props.id}/>
            </div>
        );
    }
}