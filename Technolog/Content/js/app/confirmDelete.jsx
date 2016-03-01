var ConfirmDelete = React.createClass({
    handleConfirm: function(e) {
		e.preventDefault();

		this.props.success(this.props.id)
	},
	handleCancelClick: function() {
		this.props.cancel();
	},
    render: function () {
        return(
            <div className="form-group">
				<h3>{this.props.title}</h3>
				<hr />

				<form onSubmit={this.handleConfirm}>
					<h4>{this.props.message}</h4>
					<div className="btn-toolbar pull-right" style={{marginBottom: 5 + 'px'}}>
						<button type="submit" className="btn btn-danger" onClick={this.handleConfirmClick}>Да</button>
						<button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Нет</button>
					</div>
				</form>
            </div>
        )
    }
});