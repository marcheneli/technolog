/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PanelStore from "../flux/stores/panelStore";
import PanelActions from "../flux/actions/panelActions";
import ComponentFactory from "./componentFactory";
import ComponentType from "./componentType";
import IPanel from "./iPanel";

interface IMainContentSectionProps {
}

interface IMainContentSectionState {
    panels: Array<IPanel>;
}

export default class MainContentSection extends React.Component<IMainContentSectionProps, IMainContentSectionState> {

    constructor(props: IMainContentSectionProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            panels: []
        };
    }
    
    private handlePanelsChange = () => {
        this.setState({
            panels: PanelStore.getPanels()
        });
    }

    componentWillMount() {
        PanelStore.addChangeListener(this.handlePanelsChange);
    }

    componentWillUnmount() {
        PanelStore.removeChangeListener(this.handlePanelsChange);
    }

    componentDidMount() {
        PanelActions.init(ComponentType.MainPanel);
    }

    render(): React.ReactElement<IMainContentSectionProps> {
        var panels = [];

        panels = this.state.panels.map((panel: IPanel, index: number) => {
            var Component = ComponentFactory.getComponent(panel.type);
            return <Component key={panel.id} componentId={ panel.id } params={panel.params}/>
        });

        return (
            <div className="col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height" id='infopanel'>
                {this.props.children}
                <div className="outer">
                    {panels}
                </div>
            </div>
        )
    }
}