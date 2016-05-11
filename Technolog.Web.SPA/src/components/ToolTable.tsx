import * as React from 'react';
import TableRow from './common/TableRow';

export default function TableList(props: any) {
    var toolRows = [];
    var tools = props.tools;
    var selectedTools = props.selectedTools;
    var disabledTools = props.disabledTools;

    var isAllChecked = tools.length == selectedTools.length && tools.length != 0;
    
    toolRows = tools.map((tool, index) => {
        var selectedTool = null;
        var disabledTool = null;
        for (var j = 0; j < selectedTools.length; j++) {
            if (selectedTools[j] == tool.id) {
                selectedTool = selectedTools[j];
                break;
            }
        }

        for (var j = 0; j < disabledTools.length; j++) {
            if (disabledTools[j] == tool.id) {
                disabledTool = disabledTools[j];
                break;
            }
        }

        return (
            <TableRow key={index}
                onTableRowDoubleClick={() => { props.onTableRowDoubleClick(tool) } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={tool.id}
                        onChange={props.onToolSelect}
                        checked={selectedTool}
                        disabled={disabledTool}>
                    </input>
                </td>
                <td  style={{ width: 15 + '%' }}>{tool.id}</td>
                <td  style={{ width: 80 + '%' }}>{tool.name}</td>
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
                                onChange={props.onAllToolsSelect}
                                checked={isAllChecked}>
                            </input>
                        </th>
                        <th style={{ width: 15 + '%' }}>ID</th>
                        <th style={{ width: 80 + '%' }}>Наименование</th>
                    </tr>
                </thead>
                <tbody>
                    {toolRows}
                </tbody>
            </table>
        </div>    
    );
}