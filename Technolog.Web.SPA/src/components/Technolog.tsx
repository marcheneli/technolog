import * as React from "react";
import Sidebar from './Sidebar';
import PanelStack from '../containers/PanelStack';
import * as PanelType from './panelType';

const tabs: Array<any> = [
    { id: 1, name: 'Технологические процессы', type: PanelType.TECHPROCESS_LIST },
    { id: 2, name: 'Технологические операции', type: PanelType.TECHOPERATION_LIST },
    { id: 3, name: 'Технологические шаги', type: PanelType.TECHSTEP_LIST },
    { id: 4, name: 'Инструменты', type: PanelType.TOOL_LIST },
    { id: 5, name: 'Детали', type: PanelType.PART_LIST }
];

const Technolog = () => (
    <div className="row full-height">
        <Sidebar tabs={tabs}/>
        <PanelStack/>
    </div>
);

export default Technolog;