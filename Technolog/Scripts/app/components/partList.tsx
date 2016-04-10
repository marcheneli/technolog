/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PartStore from "../flux/stores/partStore";
import PageConstants from "../constants/pageConstants";
import PartActions from "../flux/actions/partActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";

interface IPartListProps {

}

interface IPartListState {
    parts: Array<IPart>,
    currentPart: IPart,
    isConfirmDeleting: boolean,
    partAmount: number,
    partsPerPage: number
}

export default class PartList extends React.Component<IPartListProps, IPartListState> {

    constructor(props: IPartListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            parts: [],
            currentPart: null,
            isConfirmDeleting: false,
            partAmount: 0,
            partsPerPage: PageConstants.ITEMS_PER_PAGE_INIT
        };
    }

    componentWillMount() {
        PartStore.addChangePartsListener(this.handlePartsChange)
    }

    componentWillUnmount() {
        PartStore.removeChangePartsListener(this.handlePartsChange)
    }

    componentDidMount() {
        PartActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    }

    private handlePartsChange = () => {

        this.setState({
            parts: PartStore.getAll(),
            currentPart: null,
            isConfirmDeleting: false,
            partAmount: PartStore.getPartAmount(),
            partsPerPage: PartStore.getPartsPerPage()
        });
    }

    private changeCurrent = (part: IPart) => {
        this.setState({
            parts: this.state.parts,
            currentPart: part,
            isConfirmDeleting: this.state.isConfirmDeleting,
            partAmount: this.state.partAmount,
            partsPerPage: this.state.partsPerPage
        });
    }

    private partRowDoubleClick = (part: IPart) => {
        NavigationManager.openPartEditor(part.id);
    }

    private newPartBtnClickHandler = () => {
        NavigationManager.openPartEditor(0);
    }

    private handleDeleteSuccess = () => {
        PartActions.remove(this.state.currentPart.id);
    }

    private handleDeleteCancel = () => {
        this.setState({
            parts: this.state.parts,
            currentPart: this.state.currentPart,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            partAmount: this.state.partAmount,
            partsPerPage: this.state.partsPerPage
        });
    }

    private handlePartsPerPageChange = (partsPerPage: number) => {
        PageParamsManager.changePageSize(partsPerPage);
        PartActions.changePartsPerPage(partsPerPage);
    }

    private handlePartPageChange = (page: number) => {
        PageParamsManager.changePage(page);
        PartActions.changePartPage(page);
    }

    private handlePartSearchTextChange = (text: string) => {
        PageParamsManager.changeSearchText(text);
        PartActions.changePartSearchText(text);
    }

    private refreshBtnClickHandler = (text: string) => {
        PartActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
        this.setState({
            parts: [],
            currentPart: null,
            isConfirmDeleting: false,
            partAmount: 0,
            partsPerPage: this.state.partsPerPage
        });
    }

    render(): React.ReactElement<{}> {

        var partRows = [];

        for (var key in this.state.parts) {
            var part = this.state.parts[key];

            partRows.push(<TableRow key={key}
                item={part}
                isCurrent={this.state.currentPart == part}
                changeCurrent={this.changeCurrent}
                rowDoubleClickHandler={this.partRowDoubleClick}>
                <td  style={{ width: 25 + '%' }}>{part.id}</td>
                <td  style={{ width: 75 + '%' }}>{part.name}</td>
            </TableRow>);
        }

        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-heading">
                    <h4>Детали</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete
                            id={this.state.currentPart.id}
                            title={"Подтверждение удаления детали"}
                            message={"Вы действительно хотите удалить деталь " + this.state.currentPart.name}
                            success={this.handleDeleteSuccess}
                            cancel={this.handleDeleteCancel}/>
                        :
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.newPartBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" type="button" onClick={function () { this.setState({ currentPart: this.state.currentPart, isConfirmDeleting: true }); }.bind(this) }><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default" type="button" onClick={this.refreshBtnClickHandler}><span className="glyphicon glyphicon-refresh"></span></button>
                            </div>
                            <SearchInput text="Поиск..." onChange={ function (text) { this.handlePartSearchTextChange(text) }.bind(this) } />
                            <ItemsPerPageSelector onChange={this.handlePartsPerPageChange}/>
                        </div>
                    }
                    <div style={{ marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ overflowY: 'auto' }}>
                            <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: 25 + '%' }}>ID</th>
                                        <th style={{ width: 75 + '%' }}>Наименование</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
