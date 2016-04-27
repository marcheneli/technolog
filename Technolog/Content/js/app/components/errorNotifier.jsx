var ErrorNotifier = React.createClass({
	getInitialState: function () {
		return {
			errorMessage: null
		}
	},
	componentWillMount: function() {
        ErrorStore.addChangeErrorListener(this.handleNewError)
    },
    componentWillUnmount: function() {
        ErrorStore.removeChangeErrorListener(this.handleNewError)
    },
	handleNewError: function () {
		this.setState({ errorMessage: ErrorStore.getError() });
	},
	handleCloseClick: function () {
		this.setState({ errorMessage: null });
	},
	render: function () {
		return(
			this.state.errorMessage != null ?
				<div>
					<div className="modal-backdrop fade in"></div>
					<div className="modal fade in" tabIndex="-1" role="dialog" ariaLabelledby="myModalLabel" style={{ display: "block" }}>
					  <div className="modal-dialog" role="document">
						<div className="modal-content">
						  <div className="modal-header">
							<button type="button" className="close" ariaLabel="Close" onClick={this.handleCloseClick}><span ariaHidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">Оповещение об ошибке</h4>
						  </div>
						  <div className="modal-body">
							{this.state.errorMessage}
						  </div>
						  <div className="modal-footer">
							<button type="button" className="btn btn-default" onClick={this.handleCloseClick}>Ок</button>
						  </div>
						</div>
					  </div>
					</div>
				</div>
			: null
		)
	},
});