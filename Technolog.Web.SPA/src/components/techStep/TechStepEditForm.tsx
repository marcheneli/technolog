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
            <td  style={{ width: 25 + '%' }}>{props.toolUsage.tool.id}</td>
            <td  style={{ width: 50 + '%' }}>{props.toolUsage.tool.name}</td>
            <td  style={{ width: 25 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}>
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
            <td  style={{ width: 25 + '%' }}>{props.partUsage.part.id}</td>
            <td  style={{ width: 50 + '%' }}>{props.partUsage.part.name}</td>
            <td  style={{ width: 25 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}>
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
                        <button type="button" onClick={() => { } } className="btn btn-default pull-right">
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
                        <button type="button" onClick={() => { } } className="btn btn-default pull-right">
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
                </div>
            }
        </div>
    );
};

const ToolUsagesEditor = (props: any) => {
    const toolUsageRows = props.toolUsages.map(toolUsage => <ToolUsageRow
        key={toolUsage.toolId}
        toolUsage={toolUsage}
        onToolUsageChange={(value) => { props.onToolUsageChange(toolUsage.toolId, value) }}/>);
    return (
        <div>
            <div style={{ marginBottom: 10 + 'px' }}>
                <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: 25 + '%' }}>ID</th>
                            <th style={{ width: 50 + '%' }}>Наименование</th>
                            <th style={{ width: 25 + '%' }}>Применяемость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toolUsageRows}
                    </tbody>
                </table>
            </div>
            <ToolPicker
                isToolListOpen={props.isToolListOpen}
                toolListId={props.toolListId}
                openToolList={props.openToolList}
                closeToolList={props.closeToolList}/>
        </div>    
    );
};

const PartUsagesEditor = (props: any) => {
    const partUsageRows = props.partUsages.map(partUsage => <PartUsageRow
        key={partUsage.partId}
        partUsage={partUsage}
        onPartUsageChange={(value) => { props.onPartUsageChange(partUsage.partId, value) } }/>);
    return (
        <div>
            <div style={{ marginBottom: 10 + 'px' }}>
                <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: 25 + '%' }}>ID</th>
                            <th style={{ width: 50 + '%' }}>Наименование</th>
                            <th style={{ width: 25 + '%' }}>Применяемость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partUsageRows}
                    </tbody>
                </table>
            </div>
            <PartPicker
                isPartListOpen={props.isPartListOpen}
                partListId={props.partListId}
                openPartList={props.openPartList}
                closePartList={props.closePartList}/>
        </div>
    );
};

export default function TechStepEditForm(props: any) {
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
                        onChange={() => { } }
                        value={props.values.description}></textarea>
                </div>
                <div
                    className="form-group">
                    <label className="control-label">Инструменты: </label>
                    <ToolUsagesEditor
                        toolUsages={props.toolUsages}
                        onToolUsageChange={props.onToolUsageChange}
                        isToolListOpen={props.isToolListOpen}
                        toolListId={props.toolListId}
                        openToolList={props.onOpenToolList}
                        closeToolList={props.onCloseToolList}/>
                </div>
                <div
                    className="form-group">
                    <label className="control-label">Детали: </label>
                    <PartUsagesEditor
                        partUsages={props.partUsages}
                        onPartUsageChange={props.onPartUsageChange}
                        isPartListOpen={props.isPartListOpen}
                        partListId={props.partListId}
                        openPartList={props.onOpenPartList}
                        closePartList={props.onClosePartList}/>
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