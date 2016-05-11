import * as React from 'react';
import TableRow from '../common/TableRow';

export default function (props: any) {
    var techStepRows = [];
    var techSteps = props.techSteps;
    var selectedTechSteps = props.selectedTechSteps;

    var isAllChecked = techSteps.length == selectedTechSteps.length && techSteps.length != 0;
    
    techStepRows = techSteps.map((techStep, index) => {
        var selectedTechStep = null;

        for (var j = 0; j < selectedTechSteps.length; j++) {
            if (selectedTechSteps[j] == techStep.id) {
                selectedTechStep = selectedTechSteps[j];
                break;
            }
        }

        return (
            <TableRow key={index}
                onTableRowDoubleClick={() => { props.onTableRowDoubleClick(techStep) } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={techStep.id}
                        onChange={props.onTechStepSelect}
                        checked={selectedTechStep}>
                    </input>
                </td>
                <td  style={{ width: 15 + '%' }}>{techStep.id}</td>
                <td  style={{ width: 80 + '%' }}>{techStep.description}</td>
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
                                onChange={props.onAllTechStepsSelect}
                                checked={isAllChecked}>
                            </input>
                        </th>
                        <th style={{ width: 15 + '%' }}>ID</th>
                        <th style={{ width: 80 + '%' }}>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {techStepRows}
                </tbody>
            </table>
        </div>    
    );
}