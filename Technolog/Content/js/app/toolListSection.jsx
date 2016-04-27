var ToolList = React.createClass({
    getInitialState: function() {
        return {
            tools: [],
            currentTool: null,
            isConfirmDeleting: false,
            toolAmount: 0,
            toolsPerPage: PageConstants.ITEMS_PER_PAGE_INIT
        }
    },    
    componentWillMount: function() {
        ToolStore.addChangeToolsListener(this.handleToolsChange)
    },
    componentWillUnmount: function() {
        ToolStore.removeChangeToolsListener(this.handleToolsChange)
    },
    componentDidMount: function () {
        ToolActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    },
    handleToolsChange: function() {
        this.setState({
            tools: ToolStore.getAll(),
            currentTool: null,
            isConfirmDeleting: false,
            toolAmount: ToolStore.getToolAmount(),
            toolsPerPage: ToolStore.getToolsPerPage()
        });;
    },
    changeCurrent: function(tool) {
        this.setState({
            tools: this.state.tools,
            currentTool: tool,
            isConfirmDeleting: this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
        });
    },
    toolRowDoubleClick: function(tool) {
        NavigationManager.openToolEditor(tool.id);
    },
    newToolBtnClickHandler: function(){
        NavigationManager.openToolEditor(0);
    },
    handleDeleteSuccess: function(){
        ToolActions.remove(this.state.currentTool.id);
	},
	handleDeleteCancel: function(){
		this.setState({
            tools: this.state.tools,
			currentTool: this.state.currentTool,
			isConfirmDeleting: !this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
		});
	},
    handleToolsPerPageChange: function(toolsPerPage) {
		PageParamsManager.changePageSize(toolsPerPage);
        ToolActions.changeToolsPerPage(toolsPerPage);
    },
    handleToolPageChange: function(page) {
		PageParamsManager.changePage(page);
        ToolActions.changeToolPage(page);
    },
    handleToolSearchTextChange: function(text) {
		PageParamsManager.changeSearchText(text);
        ToolActions.changeToolSearchText(text);
    },
	refreshBtnClickHandler: function(text) {
		ToolActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
		this.setState({
            tools: [],
            currentTool: null,
            isConfirmDeleting: false,
            toolAmount: 0,
            toolsPerPage: this.state.toolsPerPage
        });
	},
    render: function() {

        var toolRows = [];

        for (var key in this.state.tools) {
            var tool = this.state.tools[key];

            toolRows.push(<TableRow key={key}
                                    item={tool}
                                    isCurrent={this.state.currentTool == tool}
                                    changeCurrent={this.changeCurrent}
                                    toolRowDoubleClickHandler={this.toolRowDoubleClick}>
							<td  style={{ width: 25 + '%' }}>{tool.id}</td>
							<td  style={{ width: 75 + '%' }}>{tool.name}</td>
						  </TableRow>);
        }

        return(
            <div className="panel panel-default inner" style={{marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column'}}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column'}}>
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete 
                                    id={this.state.currentTool.id}
								    title={"Подтверждение удаления инструмента"}
								    message={"Вы действительно хотите удалить инструмент " + this.state.currentTool.name}
								    success={this.handleDeleteSuccess}
								    cancel={this.handleDeleteCancel}/>
                    :
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.newToolBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" type="button" onClick={function() { this.setState({ currentTool: this.state.currentTool, isConfirmDeleting: true }); }.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default" type="button" onClick={this.refreshBtnClickHandler}><span className="glyphicon glyphicon-refresh"></span></button>
                            </div>
                            <SearchInput text="Поиск..." onChange={ function(text) { this.handleToolSearchTextChange(text) }.bind(this) } />
                            <ItemsPerPageSelector onChange={this.handleToolsPerPageChange}/>
                        </div>
                    }
                    <div style={{ marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{overflowY: 'auto'}}>
                            <table className="table table-bordered" style={{ marginBottom: 1 + 'px'}}>
                                <thead>
                                    <tr>
                                        <th style={{ width: 25 + '%' }}>ID</th>
                                        <th style={{ width: 75 + '%'}}>Наименование</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {toolRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination 
                        itemAmount={this.state.toolAmount}
                        itemsPerPage={this.state.toolsPerPage} 
                        firstSymbol="&laquo;" 
                        nextSymbol="&rsaquo;" 
                        prevSymbol="&lsaquo;" 
                        lastSymbol="&raquo;"
                        updatePage={this.handleToolPageChange}/>
                </div>
            </div>
        )
    }
});
var ToolListSection = React.createClass({
    render: function() {
        return(
            <div className="outer">
                <ToolList />
                {this.props.children}
            </div>
        )
        
    }
});