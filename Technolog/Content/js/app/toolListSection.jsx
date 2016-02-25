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
            currentTool: null,
            isConfirmDeleting: false
        }
    },
    changeCurrent: function(tool) {
        this.setState({ currentTool: tool });
    },
    toolRowDoubleClick: function(tool) {
        this.props.openToolEditFormHandler(tool);
    },
    newToolBtnClickHandler: function(){
        this.props.createNewTool();
    },
    handleDeleteSuccess: function(id){
		this.setState({
			currentTool: null,
			isConfirmDeleting: !this.state.isConfirmDeleting
		});
        this.props.deleteTool(id);
	},
	handleDeleteCancel: function(){
		this.setState({
			currentTool: this.state.currentTool,
			isConfirmDeleting: !this.state.isConfirmDeleting
		});
	},
    render: function() {
        return(
            <div className="panel panel-default inner" style={{marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column'}}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column'}}>
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete 
                                    url={'api/tools/' + this.state.currentTool.id}
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
                            <SearchInput text="Поиск..." onChange={ function(text) { this.props.updateTools(text) }.bind(this) } />
                        </div>
                    }

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{overflowY: 'auto'}}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: 25 + '%' }}>ID</th>
                                        <th style={{ width: 75 + '%'}}>Наименование</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.tools.map(function(tool, index) {
                                        return(
                                            <ToolListRow key={tool.id}
                                                         tool={tool}
                                                         isCurrent={this.state.currentTool == tool}
                                                         changeCurrent={this.changeCurrent}
                                                         toolRowDoubleClickHandler={this.toolRowDoubleClick} />
                                        )
                                    }.bind(this))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
var ToolListSection = React.createClass({
    getInitialState: function() {
        return {
            tools: [],
            editTool: null
        }
    },
    componentDidMount: function() {
        $.get("api/tools", function(tools){
            this.setState({ tools: tools})
        }.bind(this));
    },
    openToolEditForm: function(tool) {
        this.setState({ tools: this.state.tools, editTool: tool });
    },
    closeToolEditForm: function() {
        this.setState({ tools: this.state.tools, editTool: null });
    },
    createNewTool: function() {
        this.setState({ tools: this.state.tools, editTool: { id: 0, name: "" } });
    },
    deleteTool: function (id) {
        var tools = this.state.tools;

        for(var i = 0; i < tools.length; i++){
            if(tools[i].id == id){
                tools.splice(i, 1);
                break;
            }
        }

        this.setState({ tools: tools });
    },
    addTool: function (tool) {
        var tools = this.state.tools;

        tools.push(tool);

        this.setState({ tools: tools, editTool: tool });
    },
    updateTools: function(search) {
        $.get("api/tools?search=" + search, function(tools){
            this.setState({ tools: tools, editTool: this.state.editTool})
        }.bind(this));
    },
    render: function() {
        return(
            <div className="outer">
                <ToolList tools={this.state.tools}
                          openToolEditFormHandler={this.openToolEditForm}
                          createNewTool={this.createNewTool}
                          deleteTool={this.deleteTool}
                          updateTools={this.updateTools}/>
                {this.state.editTool != null ?
                    <ToolEditForm tool={this.state.editTool}
                                  url="api/tools"
                                  closeToolEditFormHandler={this.closeToolEditForm} 
                                  addNewTool={this.addTool}/>
                :null}
            </div>
        )
        
    }
});