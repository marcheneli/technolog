import * as React from 'react';
import Panel from '../containers/Panel';
import * as PanelFactory from './panelFactory';

export default function PanelStack(props: any) {
    const panels = props.panels.map(panel => 
        <div key={panel.id} style={{ display: 'inline-block', height: 100 + '%' }}>
            { PanelFactory.getPanel(panel) }
        </div>
    );

    return (
        <div
            className="col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height"
            id='infopanel'
            style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <div className="outer">
                {panels}
            </div>
        </div>    
    );
}