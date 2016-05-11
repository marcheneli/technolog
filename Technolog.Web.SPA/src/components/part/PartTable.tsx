import * as React from 'react';
import TableRow from '../common/TableRow';

export default function TableList(props: any) {
    var partRows = [];
    var parts = props.parts;
    var selectedParts = props.selectedParts;
    var disabledParts = props.disabledParts;

    var isAllChecked = parts.length == selectedParts.length && parts.length != 0;
    
    partRows = parts.map((part, index) => {
        var selectedPart = null;
        var disabledPart = null;

        for (var j = 0; j < selectedParts.length; j++) {
            if (selectedParts[j] == part.id) {
                selectedPart = selectedParts[j];
                break;
            }
        }

        for (var j = 0; j < disabledParts.length; j++) {
            if (disabledParts[j] == part.id) {
                disabledPart = disabledParts[j];
                break;
            }
        }

        return (
            <TableRow key={index}
                onTableRowDoubleClick={() => { props.onTableRowDoubleClick(part) } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={part.id}
                        onChange={props.onPartSelect}
                        checked={selectedPart}
                        disabled={disabledPart}>
                    </input>
                </td>
                <td  style={{ width: 15 + '%' }}>{part.id}</td>
                <td  style={{ width: 80 + '%' }}>{part.name}</td>
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
                                onChange={props.onAllPartsSelect}
                                checked={isAllChecked}>
                            </input>
                        </th>
                        <th style={{ width: 15 + '%' }}>ID</th>
                        <th style={{ width: 80 + '%' }}>Наименование</th>
                    </tr>
                </thead>
                <tbody>
                    {partRows}
                </tbody>
            </table>
        </div>    
    );
}