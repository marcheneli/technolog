/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PanelStore from "../flux/stores/panelStore";
import PanelActions from "../flux/actions/panelActions";
import ComponentType from "./componentType";

export default class PartListPanel extends React.Component<{}, {}> {

    constructor(props: {}, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {

        };
    }

    componentWillMount() {
        PanelStore.addChangeListener(this.handleError);
    }

    componentWillUnmount() {
        PanelStore.removeChangeListener(this.handleError);
    }

    componentDidMount() {
        PanelActions.init(ComponentType.MainPanel);
    }

    private handleError = () => {
        this.setState({});
    }

    private handleError3 = () => {
        console.log(this);
        this.setState({});
    }

    render(): React.ReactElement<{}> {
        return (
            <div>Hi! I'm part list panel.</div>    
        );
    }
}