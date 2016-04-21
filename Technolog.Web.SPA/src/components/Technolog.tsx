import * as React from "react";
import Sidebar from './Sidebar';
import PanelStack from '../containers/PanelStack';

const tabList: Array<any> = [
    { id: 1, name: 'Технологические процессы', linkName: 'processes', mode: "" },
    { id: 2, name: 'Технологические операции', linkName: 'operations', mode: "" },
    { id: 3, name: 'Технологические шаги', linkName: 'steps', mode: "" },
    { id: 4, name: 'Инструменты', linkName: 'tools', mode: "" },
    { id: 5, name: 'Детали', linkName: 'parts', mode: "" }
];

const Technolog = () => (
    <div className="row full-height">
        <Sidebar tabs={tabList}/>
        <PanelStack/>
    </div>
);

export default Technolog;