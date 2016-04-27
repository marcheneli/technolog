var ToolEditForm = React.createClass({
    getInitialState: function(){
		return {
			tool: null,
			errorMessage: null,
			isValid: true
		}
	},   
    componentWillMount: function() {
		this.inputs = {};
        ToolStore.addChangeEditToolListener(this.handleEditToolChange);
		ErrorStore.addChangeErrorListener(this.handleNewError)
    },
    componentWillUnmount: function() {
        ToolStore.removeChangeEditToolListener(this.handleEditToolChange);
		ErrorStore.removeChangeErrorListener(this.handleNewError)
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
			errorMessage: null,
			isValid: true
		});
	},
	handleNewError: function () {
		this.setState({
			tool: null,
			errorMessage: ErrorStore.getError(),
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
				name:event.target.value,
				price:this.state.tool.price,
			},
			errorMessage: null,
			isValid:true
        });
    },
	setToolPrice: function (event) {
        this.setState({
            tool:{
				id:this.state.tool.id,
				name:this.state.tool.name,
				price:event.target.value
			},
			errorMessage: null,
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
					{ this.state.errorMessage != null ?
						<div>
							<div className="form-group">
								<span>{this.state.errorMessage}</span>
							</div>
							<div className="form-group">
								<div className="btn-toolbar">
									<button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
								</div>
							</div>
						</div>
					: null}
                    { this.state.tool == null ? 
						this.state.errorMessage == null ?
							<p>Загрузка данных...</p>
						: null
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
								<label className="control-label">Цена:</label>
								<TextInput name="toolPrice"
										   text=""
										   value={this.state.tool.price}
										   required={true}
										   onChange={this.setToolPrice}
										   errorMessage="Данное значение недействительно"
										   emptyMessage="Цена обязательна для ввода"
										   register={this.registerInput}
										   validate={this.nameValidate} />
							</div>
							<div className="form-group">
								<div className="btn-toolbar">
									<input className="btn btn-primary" type="submit" value="Сохранить" />
									<button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
								</div>
							</div>
						</form>
					}
                </div>
            </div>
        )
    }
});