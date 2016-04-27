var Form = React.createClass({

	updateModel: function (component) {
		Object.keys(this.inputs).forEach(function (name) {
			this.model[name] = this.inputs[name].state.value;
		}.bind(this));
	},
	
	submit: function (event) {
		event.preventDefault();
		this.updateModel();
		console.log(this.model);
	},
	
	render: function () {
		return (
			<form onSubmit={this.submit}>
				{this.props.children}
				<button type="submit">Submit</button>
			</form>
		);
	}
});