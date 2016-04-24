import * as React from 'react';
import ToolTable from '../containers/ToolTable';
import ItemListControlPanel from './common/ItemListControlPanel';
import ItemsPerPageSelector from './common/ItemsPerPageSelector';
import Pagination from './common/Pagination';

interface IToolListProps {
    id: number;
    onMount();
    onDeleteBtnClick();
    onAddBtnClick();
    onRefreshBtnClick();
    onSearchTextChange();
    onToolPageChange();
    onToolsPerPageChange();
    tools: Array<any>;
    selectedTools: Array<any>;
    isUpdating: boolean;
    totalAmount: number;
    toolPage: number;
    toolsPerPage: number;
}

export default class ToolList extends React.Component<IToolListProps, {}> {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <div style={{
                position: 'relative',
                display: 'flex',
                flexGrow: 2,
                flexBasis: 0 + '%',
                minHeight: 0, minWidth: 0
            }}>
                <ItemListControlPanel
                    onItemDelete={this.props.onDeleteBtnClick}
                    onNewItem={this.props.onAddBtnClick}
                    onRefresh={this.props.onRefreshBtnClick}
                    onSearchTextChange={this.props.onSearchTextChange}
                    isDeleteEnable={this.props.selectedTools.length > 0}
                    isUpdating={this.props.isUpdating}
                    />
                <ToolTable id={this.props.id}/>
                <div className="btn-toolbar" style={{ flexShrink: 0 }}>
                    <ItemsPerPageSelector
                        onChange={this.props.onToolsPerPageChange}/>
                    <Pagination
                        itemAmount={this.props.totalAmount}
                        itemsPerPage={this.props.toolsPerPage}
                        currentPage={this.props.toolPage}
                        firstSymbol='«'
                        nextSymbol='›'
                        prevSymbol='‹'
                        lastSymbol='»'
                        onPageBtnClick={this.props.onToolPageChange}/>
                </div>
            </div>
        );
    }
}