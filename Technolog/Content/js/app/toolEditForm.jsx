var ToolEditForm = React.createClass({
    getInitialState: function(){
        console.log(this.props.tool);
		return {
			tool:{
				id:this.props.tool.id,
				name:this.props.tool.name
			},
			isValid:true
		}
	},
    componentWillReceiveProps: function(nextProps){
        this.setState({
            tool:{
				id:nextProps.tool.id,
				name:nextProps.tool.name
			},
			isValid:true
        });
    },	
    componentWillMount: function(){
		this.inputs = {};
	},
    nameValidate: function () {
		//you could do something here that does general validation for any form field
		return true;
	},
    handleSubmit: function (e) {
		e.preventDefault();

        var type = this.state.tool.id == 0 ? 'PUT' : 'POST'

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: type,
			data: { id: this.state.tool.id,
					name: this.inputs["toolName"].state.value,
					__RequestVerificationToken: antiForgeryToken },
			success: function(data) {
                if(this.state.tool.id == 0){
                    this.props.addNewTool(data);
                }
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
    cancelClickHandler: function () {
        this.props.closeToolEditFormHandler();
    },
	registerInput: function(input){
		this.inputs[input.props.name] = input;
	},
    setToolName: function (event) {
        this.setState({
            tool:{
				id:this.props.tool.id,
				name: event.target.value
			},
			isValid:true
        });
    },
    render: function () {
        return(
            <div className="panel panel-default inner" style={{marginBottom: 0 + 'px'}}>
                <div className="panel-heading">
                    <h4>Редактирование инструмента</h4>
                </div>
                <div className="panel-body">
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="control-label">Наименование:</label>
                            <TextInput name="toolName"
                                       text=""
                                       value={this.state.tool.name}
                                       required={true}
                                       onChange={this.setToolName}
                                       errorMessage="Данное наименование недействительно"
                                       emptyMessage="Наименование обязательно для ввода"
                                       register={this.registerInput}
                                       validate={this.nameValidate} />
                        </div>
                        <div className="form-group">
                            <div className="btn-toolbar">
                                <input className="btn btn-primary" type="submit" value="Сохранить" />
                                <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Отмена</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});