// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PanelStore from "../flux/stores/panelStore";
import ComponentFactory from "./componentFactory";

interface IMainContentSectionState {
    panels: Array<IPanel>;
}

export default class MainContentSection
    extends React.Component<{}, IMainContentSectionState> {

    constructor(props: any, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            panels: []
        };
    }

    componentWillMount() {
        PanelStore.addChangeListener(this.handlePanelsChange)
    }

    componentWillUnmount() {
        PanelStore.removeChangeListener(this.handlePanelsChange)
    }

    componentDidMount() {

    }

    handlePanelsChange = () => {
        this.setState({
            panels: PanelStore.getPanels()
        });
    }

    render(): React.ReactElement<{}> {
        var panels = [];

        panels = this.state.panels.map((panel: IPanel) => {
            var Component = ComponentFactory.getComponent(panel.type);
            <Component componentId= { panel.id }/>
        });

        return (
            <div className="col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height" id='infopanel'>
                {this.props.children}
                {panels}
            </div>
        )
    }
}