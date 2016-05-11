import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';
import ToolList from '../../containers/ToolList';
import PartList from '../../containers/part/PartList';

interface IContentEditableProps {
    onChange(text: string);
    html: string;
}

class ContentEditable extends React.Component<IContentEditableProps, {}> {
    private onContentChange = (): void => {
        this.props.onChange(ReactDOM.findDOMNode(this).innerHTML);
    }

    render(): React.ReactElement<IContentEditableProps> {
        return (
            <div
                className="edit"
                contentEditable
                dangerouslySetInnerHTML={{ __html: this.props.html }}
                onInput={this.onContentChange}
                style={{ height: 100 + '%', width: 100 + '%', margin: 0, padding: 0, textAlign: 'center' }}>
            </div>
        );
    }
};

const ToolUsageRow = (props: any) => {
    return (
        <tr>
            <td style={{ width: 5 + '%' }}>
                <input
                    type="checkbox"
                    value={props.toolUsage.toolId}
                    onChanged={props.onToolUsageSelect}
                    checked={props.isSelected}>
                </input>
            </td>
            <td  style={{ width: 20 + '%' }}>{props.toolUsage.tool.id}</td>
            <td  style={{ width: 65 + '%' }}>{props.toolUsage.tool.name}</td>
            <td  style={{ width: 10 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}>
                <ContentEditable
                    html={String(props.toolUsage.quantity) }
                    onChange={props.onToolUsageChange}/>
            </td>
        </tr>    
    );
};

const PartUsageRow = (props: any) => {
    return (
        <tr>
            <td style={{ width: 5 + '%' }}>
                <input
                    type="checkbox"
                    value={props.partUsage.partId}
                    onChange={props.onPartUsageSelect}
                    checked={props.isSelected}>
                </input>
            </td>
            <td  style={{ width: 20 + '%' }}>{props.partUsage.part.id}</td>
            <td  style={{ width: 65 + '%' }}>{props.partUsage.part.name}</td>
            <td  style={{ width: 10 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}>
                <ContentEditable
                    html={String(props.partUsage.quantity) }
                    onChange={props.onPartUsageChange}/>
            </td>
        </tr>
    );
};

const ToolPicker = (props: any) => {
    return (
        <div>
            { props.isToolListOpen ?
                <div>
                    <div className="form-group">
                        <button type="button" onClick={props.closeToolList} className="btn btn-default">
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                        <button type="button" onClick={() => { props.onToolAddBtnClick(props.toolListId)} } className="btn btn-default pull-right">
                            <span className="glyphicon glyphicon-plus"></span>
                            <span> Добавить выбранные</span>
                        </button>
                    </div>
                    <ToolList id={props.toolListId}/>
                </div>
                :
                <div className="form-group">
                    <button type="button" onClick={props.openToolList} className="btn btn-default">
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                    <button type="button" onClick={() => { } } className="btn btn-default">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            }
        </div>
    );
};

const PartPicker = (props: any) => {
    return (
        <div>
            { props.isPartListOpen ?
                <div>
                    <div className="form-group">
                        <button type="button" onClick={props.closePartList} className="btn btn-default">
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                        <button type="button" onClick={() => { props.onPartAddBtnClick(props.partListId) } } className="btn btn-default pull-right">
                            <span className="glyphicon glyphicon-plus"></span>
                            <span> Добавить выбранные</span>
                        </button>
                    </div>
                    <PartList id={props.partListId}/>
                </div>
                :
                <div className="form-group">
                    <button type="button" onClick={props.openPartList} className="btn btn-default">
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                    <button type="button" onClick={() => { }} className="btn btn-default">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            }
        </div>
    );
};

const ToolUsagesEditor = (props: any) => {
    const toolUsageRows = props.toolUsages.map(toolUsage => <ToolUsageRow
        key={toolUsage.toolId}
        toolUsage={toolUsage}
        onToolUsageChange={(value) => { props.onToolUsageChange(toolUsage.toolId, value) } }
        onToolUsageSelect={() => { } }
        isSelected={props.selectedToolUsages.indexOf(toolUsage.toolId) >= 0}/>
    );
    return (
        <div>
            <div style={{ marginBottom: 10 + 'px' }}>
                <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: 5 + '%' }}>
                                <input
                                    type="checkbox"
                                    onChange={props.onAllToolSelect}
                                    checked={false}>
                                </input>
                            </th>
                            <th style={{ width: 20 + '%' }}>ID</th>
                            <th style={{ width: 65 + '%' }}>Наименование</th>
                            <th style={{ width: 10 + '%' }}>Применяемость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toolUsageRows}
                    </tbody>
                </table>
            </div>
        </div>    
    );
};

const PartUsagesEditor = (props: any) => {
    const partUsageRows = props.partUsages.map(partUsage => <PartUsageRow
        key={partUsage.partId}
        partUsage={partUsage}
        onPartUsageChange={(value) => { props.onPartUsageChange(partUsage.partId, value) } }
        onPartUsageSelect={props.onPartUsageSelect}
        isSelected={props.selectedPartUsages.indexOf(partUsage.partId) >= 0}/>);
    return (
        <div>
            <div style={{ marginBottom: 10 + 'px' }}>
                <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: 5 + '%' }}>
                                <input
                                    type="checkbox"
                                    onChange={props.onAllPartSelect}
                                    checked={false}>
                                </input>
                            </th>
                            <th style={{ width: 20 + '%' }}>ID</th>
                            <th style={{ width: 65 + '%' }}>Наименование</th>
                            <th style={{ width: 10 + '%' }}>Применяемость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partUsageRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function TechStepEditForm(props: any) {
    const onToolUsageSelect = (event) => {
        var selectedToolUsages = props.selectedToolUsages;
        var toolUsages = props.toolUsages;

        if (event.target.checked) {
            var toolUsage;

            for (var i = 0; i < toolUsages.length; i++) {
                if (toolUsages[i].toolId == event.target.value) {
                    toolUsage = toolUsages[i];
                    break;
                }
            }

            selectedToolUsages = [
                ...selectedToolUsages,
                toolUsage.toolId
            ];

        } else {
            selectedToolUsages = selectedToolUsages.filter(toolId => toolId != event.target.value);
        }

        props.onSelectedToolUsagesChange(selectedToolUsages);
    }

    const onAllToolUsagesSelect = (event) => {
        var selectedToolUsages = [];
        var toolUsages = props.toolUsages;

        if (event.target.checked) {
            selectedToolUsages = toolUsages.map(tu => tu.toolId);
        }

        props.onSelectedToolUsagesChange(selectedToolUsages);
    }

    const onPartUsageSelect = (event) => {
        var selectedPartUsages = props.selectedPartUsages;
        var partUsages = props.partUsages;

        if (event.target.checked) {
            var partUsage;

            for (var i = 0; i < partUsages.length; i++) {
                if (partUsages[i].partId == event.target.value) {
                    partUsage = partUsages[i];
                    break;
                }
            }

            selectedPartUsages = [
                ...selectedPartUsages,
                partUsage.partId
            ];

        } else {
            selectedPartUsages = selectedPartUsages.filter(partId => partId != event.target.value);
        }

        props.onSelectedToolUsagesChange(selectedPartUsages);
    }

    const onAllPartUsagesSelect = (event) => {
        var selectedPartUsages = [];
        var partUsages = props.partUsages;

        if (event.target.checked) {
            selectedPartUsages = partUsages.map(pu => pu.partId);
        }

        props.onSelectedToolUsagesChange(selectedPartUsages);
    }
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
            <DialogBackground isShow={props.isSaving}>
                <PendingPanel title={"Сохранение инструмента"}>
                    <PendingAnimation>
                        <h4>Пожалуйста, подождите.</h4>
                        <h4>Идет сохранение.</h4>
                    </PendingAnimation>
                </PendingPanel>
            </DialogBackground>
            <form role="form" onSubmit={props.handleSubmit}>
                <div
                    className="form-group">
                    <label className="control-label">Описание: </label>
                    <textarea
                        className="form-control"
                        rows="5"
                        cols="50"
                        onChange={props.onDescriptionChange}
                        value={props.values.description}></textarea>
                </div>
                <div
                    className="form-group">
                    <label className="control-label">Инструменты: </label>
                    <div className="btn-toolbar" style={{ marginBottom: '5px' }}>
                        <button type="button" onClick={props.openToolList} className="btn btn-default">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                        <button type="button" onClick={() => { } } className="btn btn-default">
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>
                    <ToolUsagesEditor
                        toolUsages={props.toolUsages}
                        selectedToolUsages={props.selectedToolUsages}
                        onToolUsageChange={props.onToolUsageChange}
                        onToolUsageSelect={onToolUsageSelect}
                        onAllToolUsagesSelect={onAllToolUsagesSelect}/>
                </div>
                <div
                    className="form-group">
                    <label className="control-label">Детали: </label>
                    <div className="btn-toolbar" style={{ marginBottom: '5px' }}>
                        <button type="button" onClick={props.openPartList} className="btn btn-default">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                        <button type="button" onClick={() => { } } className="btn btn-default">
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>
                    <PartUsagesEditor
                        partUsages={props.partUsages}
                        selectedPartUsages={props.selectedPartUsages}
                        onPartUsageChange={props.onPartUsageChange}
                        onPartUsageSelect={onPartUsageSelect}
                        onAllPartUsageSelect={onAllPartUsagesSelect}/>
                </div>
                <div className="form-group">
                    <div className="btn-toolbar">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={false}>Сохранить</button>
                    </div>
                </div>
            </form>
        </div>    
    );
}