var ToolListRow = React.createClass({
    getInitialState: function() {
        return {
            color: this.props.isCurrent ? 'info' : null
        }
    },
    onMouseEnterHandler: function() {
        if(!this.props.isCurrent) this.setState({ color: "active"});
    },
    onMouseLeaveHandler: function() {
        if(!this.props.isCurrent) this.setState({ color: null});
    },
    onClickHandler: function() {
        if(!this.props.isCurrent) {this.setState({ color: null}); this.props.changeCurrent(this.props.tool); }
        else {this.setState({ color: "active"}); this.props.changeCurrent(null); }
    },
    onDoubleClickHandler: function() {
        this.props.toolRowDoubleClickHandler(this.props.tool);
    },
    render: function() {
        return(
            <tr className={this.props.isCurrent ? 'info' : this.state.color}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
                onClick={this.onClickHandler}
                onDoubleClick={this.onDoubleClickHandler}>
                <td  style={{ width: 25 + '%' }}>{this.props.tool.id}</td>
                <td  style={{ width: 75 + '%' }}>{this.props.tool.name}</td>
            </tr>
        )
    }
});
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
        ToolStore.addChangeListener(this.handleToolsChange)
    },
    componentWillUnmount: function() {
        ToolStore.removeChangeListener(this.handleToolsChange)
    },
    componentDidMount: function () {
        ToolActions.init();
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
        this.props.openToolEditFormHandler(tool);
    },
    newToolBtnClickHandler: function(){
        this.props.openToolEditFormHandler({ id: 0, name: "" });
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
        ToolActions.changeToolsPerPage(toolsPerPage);
    },
    handleToolPageChange: function(page) {
        ToolActions.changeToolPage(page);
    },
    handleToolSearchTextChange: function(text) {
        ToolActions.changeToolSearchText(text);
    },
    render: function() {

        var toolRows = [];

        for (var key in this.state.tools) {
            var tool = this.state.tools[key];

            toolRows.push(<ToolListRow key={key}
                                    tool={tool}
                                    isCurrent={this.state.currentTool == tool}
                                    changeCurrent={this.changeCurrent}
                                    toolRowDoubleClickHandler={this.toolRowDoubleClick} />);
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
                                <button className="btn btn-default" onClick={this.newToolBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" onClick={function() { this.setState({ currentTool: this.state.currentTool, isConfirmDeleting: true }); }.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default"><span className="glyphicon glyphicon-refresh"></span></button>
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
    getInitialState: function() {
        return {
            editTool: null
        }
    },
    openToolEditForm: function(tool) {
        this.setState({
            editTool: tool
        });
    },
    closeToolEditForm: function() {
        this.setState({
            editTool: null
        });
    },
    render: function() {
        return(
            <div className="outer">
                <ToolList openToolEditFormHandler={this.openToolEditForm}/>
                {this.state.editTool != null ?
                    <ToolEditForm tool={this.state.editTool}
                                  closeToolEditFormHandler={this.closeToolEditForm}/>
                :null}
            </div>
        )
        
    }
});