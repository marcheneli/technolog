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
                <td>{this.props.tool.id}</td>
                <td>{this.props.tool.name}</td>
            </tr>
        )
    }
});
var ToolList = React.createClass({
    getInitialState: function() {
        return {
            currentTool: null
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
    render: function() {
        return(
            <div className="panel panel-default inner" style={{marginBottom: 0 + 'px'}}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div className="panel-body">
                    <div className="btn-group" role="group" aria-label="...">
                        <button className="btn btn-default" onClick={this.newToolBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                        <button className="btn btn-default"><span className="glyphicon glyphicon-trash"></span></button>
                        <button className="btn btn-default"><span className="glyphicon glyphicon-refresh"></span></button>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Наименование</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tools.map(function(tool, index) {
                                return(
                                                <ToolListRow key={tool.id} 
                                                             tool={tool} 
                                                             isCurrent={this.state.currentTool == tool} 
                                                             changeCurrent={this.changeCurrent}
                                                             toolRowDoubleClickHandler={this.toolRowDoubleClick}/>
                                )
                            }.bind(this))}
                        </tbody>
                    </table>
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
    render: function() {
        if(this.state.editTool == null){
            return(
                <div className="outer">
                    <ToolList tools={this.state.tools}
                              openToolEditFormHandler={this.openToolEditForm}
                              createNewTool={this.createNewTool}/>
                </div>
            )
        } else {
            return(
                <div className="outer">
                    <ToolList tools={this.state.tools}
                              openToolEditFormHandler={this.openToolEditForm}/>
                    <ToolEditForm tool={this.state.editTool}
                                  url="api/tools"
                                  closeToolEditFormHandler={this.closeToolEditForm} />
                </div>
            )
        }
        
    }
});