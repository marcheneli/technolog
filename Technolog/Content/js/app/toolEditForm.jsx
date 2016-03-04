var ToolEditForm = React.createClass({
    getInitialState: function(){
		return {
			tool: null,
			isValid: true
		}
	},   
    componentWillMount: function() {
		this.inputs = {};
        ToolStore.addChangeEditToolListener(this.handleEditToolChange);
    },
    componentWillUnmount: function() {
        ToolStore.removeChangeEditToolListener(this.handleEditToolChange);
    },
    componentDidMount: function () {
        ToolActions.loadEditTool(this.props.params.toolId);
    },
	componentWillReceiveProps: function (nextProps) {
		ToolActions.loadEditTool(nextProps.params.toolId);
	},
    handleEditToolChange: function(){
		this.setState({
			tool: ToolStore.getEditTool(),
			isValid: true
		});
	},
    nameValidate: function () {
		//you could do something here that does general validation for any form field
		return true;
	},
    handleSubmit: function (e) {
		e.preventDefault();
        
        if (this.state.tool.id == 0) {
            ToolActions.create(this.state.tool);
        } else {
		    ToolActions.update(this.state.tool);
        }
	},
    cancelClickHandler: function () {
        NavigationManager.closeToolEditor();
    },
	registerInput: function(input){
		this.inputs[input.props.name] = input;
	},
    setToolName: function (event) {
        this.setState({
            tool:{
				id:this.state.tool.id,
				name:event.target.value
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
                    { this.state.tool == null ? 
						<p>Загрузка данных...</p>
					:
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
					}
                </div>
            </div>
        )
    }
});