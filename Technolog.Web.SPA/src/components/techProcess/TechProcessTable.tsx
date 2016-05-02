import * as React from 'react';
import TableRow from '../common/TableRow';

export default function TableList(props: any) {
    var techProcessRows = [];
    var techProcesses = props.techProcesses;
    var selectedTechProcesses = props.selectedTechProcesses;

    var isAllChecked = techProcesses.length == selectedTechProcesses.length && techProcesses.length != 0;
    
    techProcessRows = techProcesses.map((techProcess, index) => {
        var selectedTechProcess = null;

        for (var j = 0; j < selectedTechProcesses.length; j++) {
            if (selectedTechProcesses[j] == techProcess.id) {
                selectedTechProcess = selectedTechProcesses[j];
                break;
            }
        }

        return (
            <TableRow key={index}
                onTableRowDoubleClick={() => { props.onTableRowDoubleClick(techProcess) } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={techProcess.id}
                        onChange={props.onTechProcessSelect}
                        checked={selectedTechProcess}>
                    </input>
                </td>
                <td  style={{ width: 15 + '%' }}>{techProcess.id}</td>
                <td  style={{ width: 80 + '%' }}>{techProcess.name}</td>
            </TableRow>);
    });

    return (
        <div style={{ marginBottom: 10 + 'px', overflow: 'auto' }}>
            <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                <thead>
                    <tr>
                        <th  style={{ width: 5 + '%' }}>
                            <input
                                type='checkbox'
                                onChange={props.onAllTechProcessesSelect}
                                checked={isAllChecked}>
                            </input>
                        </th>
                        <th style={{ width: 15 + '%' }}>ID</th>
                        <th style={{ width: 80 + '%' }}>Наименование</th>
                    </tr>
                </thead>
                <tbody>
                    {techProcessRows}
                </tbody>
            </table>
        </div>    
    );
}