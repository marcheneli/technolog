var ConfirmDelete = React.createClass({
    handleConfirm: function(e) {
		e.preventDefault();

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'DELETE',
			data: { __RequestVerificationToken: antiForgeryToken },
			success: function(id) {
                this.props.success(id);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
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