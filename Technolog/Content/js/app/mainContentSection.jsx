var MainContentSection = React.createClass({
	componentDidMount: function() {
	
	},
    render: function () {
        return(
            <div className="col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height" id='infopanel'>
				{this.props.currentTab === 1 ?
					<TechProcessListSection />
                :null}
				{this.props.currentTab === 2 ?
					<TechOperationListSection />
                :null}
				{this.props.currentTab === 3 ?
					<ToolListSection />
                :null}
				{this.props.currentTab === 4 ?
					<PartListSection />
                :null}
			</div>
        )
    }
});