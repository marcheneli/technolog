var MainContentSection = React.createClass({
    render: function () {
        return(
            <div className="col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height" id='infopanel'>
				{this.props.children}
			</div>
        )
    }
});