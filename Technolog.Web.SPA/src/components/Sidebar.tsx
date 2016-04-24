import * as React from 'react';
import Tab from '../containers/Tab';

export default function Sidebar(props: any) {
    const tabs = props.tabs.map(tab => 
        <Tab key={tab.id} type={tab.type}>{tab.name}</Tab>
    );

    return (
        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 sidebar">
            <ul className="nav nav-sidebar">
                {tabs}
            </ul>
        </div>    
    );
}