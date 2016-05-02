import * as React from 'react';
import TableRow from '../common/TableRow';

export default function TableList(props: any) {
    var techOperationRows = [];
    var techOperations = props.techOperations;
    var selectedTechOperations = props.selectedTechOperations;

    var isAllChecked = techOperations.length == selectedTechOperations.length && techOperations.length != 0;
    
    techOperationRows = techOperations.map((techOperation, index) => {
        var selectedTechOperation = null;

        for (var j = 0; j < selectedTechOperations.length; j++) {
            if (selectedTechOperations[j] == techOperation.id) {
                selectedTechOperation = selectedTechOperations[j];
                break;
            }
        }

        return (
            <TableRow key={index}
                onTableRowDoubleClick={() => { props.onTableRowDoubleClick(techOperation) } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={techOperation.id}
                        onChange={props.onTechOperationSelect}
                        checked={selectedTechOperation}>
                    </input>
                </td>
                <td  style={{ width: 15 + '%' }}>{techOperation.id}</td>
                <td  style={{ width: 80 + '%' }}>{techOperation.name}</td>
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
                                onChange={props.onAllTechOperationsSelect}
                                checked={isAllChecked}>
                            </input>
                        </th>
                        <th style={{ width: 15 + '%' }}>ID</th>
                        <th style={{ width: 80 + '%' }}>Наименование</th>
                    </tr>
                </thead>
                <tbody>
                    {techOperationRows}
                </tbody>
            </table>
        </div>    
    );
}