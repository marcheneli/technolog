var PartListRow = React.createClass({
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
        if(!this.props.isCurrent) {this.setState({ color: null}); this.props.changeCurrent(this.props.part); }
        else {this.setState({ color: "active"}); this.props.changeCurrent(null); }
    },
    onDoubleClickHandler: function() {
        this.props.partRowDoubleClickHandler(this.props.part);
    },
    render: function() {
        return(
            <tr className={this.props.isCurrent ? 'info' : this.state.color}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
                onClick={this.onClickHandler}
                onDoubleClick={this.onDoubleClickHandler}>
                <td>{this.props.part.id}</td>
                <td>{this.props.part.name}</td>
            </tr>
        )
    }
});
var PartList = React.createClass({
    getInitialState: function() {
        return {
            currentPart: null,
            isConfirmDeleting: false
        }
    },
    changeCurrent: function(part) {
        this.setState({ currentPart: part });
    },
    partRowDoubleClick: function(part) {
        this.props.openPartEditFormHandler(part);
    },
    newPartBtnClickHandler: function(){
        this.props.createNewPart();
    },
    handleDeleteSuccess: function(id){
		this.setState({
			currentPart: null,
			isConfirmDeleting: !this.state.isConfirmDeleting
		});
        this.props.deletePart(id);
	},
	handleDeleteCancel: function(){
		this.setState({
			currentPart: this.state.currentPart,
			isConfirmDeleting: !this.state.isConfirmDeleting
		});
	},
    render: function() {
        return(
            <div className="panel panel-default inner" style={{marginBottom: 0 + 'px'}}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div className="panel-body">
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete url={'api/parts/' + this.state.currentPart.id}
                                       title={"Подтверждение удаления детали"}
                                       message={"Вы действительно хотите удалить деталь " + this.state.currentPart.name}
                                       success={this.handleDeleteSuccess}
                                       cancel={this.handleDeleteCancel} />
                    :
                        <div className="btn-group" role="group" aria-label="...">
                            <button className="btn btn-default" onClick={this.newPartBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                            <button className="btn btn-default" onClick={function() { this.setState({ currentPart this.state.currentPart, isConfirmDeleting true }); }.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                            <button className="btn btn-default"><span className="glyphicon glyphicon-refresh"></span></button>
                        </div>
                    }
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Наименование</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.parts.map(function(part, index) {
                            return(
                                                <PartListRow key={part.id}
                                                             part={part}
                                                             isCurrent={this.state.currentPart == part}
                                                             changeCurrent={this.changeCurrent}
                                                             partRowDoubleClickHandler={this.partRowDoubleClick} />
                            )
                            }.bind(this))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});
var PartListSection = React.createClass({
    getInitialState: function() {
        return {
            parts: [],
            editPart: null
        }
    },
    componentDidMount: function() {
        $.get("api/parts", function(parts){
            this.setState({ parts: parts})
        }.bind(this));
    },
    openPartEditForm: function(part) {
        this.setState({ parts: this.state.parts, editPart: part });
    },
    closePartEditForm: function() {
        this.setState({ parts: this.state.parts, editPart: null });
    },
    createNewPart: function() {
        this.setState({ parts: this.state.parts, editPart: { id: 0, name: "" } });
    },
    deletePart: function (id) {
        var parts = this.state.parts;

        for(var i = 0; i < parts.length; i++){
            if(parts[i].id == id){
                parts.splice(i, 1);
                break;
            }
        }

        this.setState({ parts: parts });
    },
    addPart: function (part) {
        var parts = this.state.parts;

        parts.push(part);

        this.setState({ parts: parts, editPart: part });
    },
    render: function() {
        return(
            <div className="outer">
                <PartList parts={this.state.parts}
                          openPartEditFormHandler={this.openPartEditForm}
                          createNewPart={this.createNewPart}
                          deletePart={this.deletePart} />
                {this.state.editPart != null ?
                    <PartEditForm part={this.state.editPart}
                                  url="api/parts"
                                  closePartEditFormHandler={this.closePartEditForm}
                                  addNewPart={this.addPart} />
                :null}
            </div>
        )

    }
});