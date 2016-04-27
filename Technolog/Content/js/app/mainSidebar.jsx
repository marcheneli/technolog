var Tabs = React.createClass({
	render: function(){
		return(
			<ul className="nav nav-sidebar">
				{this.props.tabList.map(function(tab) {
					return (
                        <li key={tab.id}>
                            <ReactRouter.Link activeClassName='active' to={'/' + tab.linkName}>{tab.name}</ReactRouter.Link>
                        </li>
					)
				}.bind(this))}
			</ul>
		)
	}
});

var MainSidebar = React.createClass({
	handleClick: function(tab){
        this.props.changeTab(tab);
    },
	render: function(){
		return(
			<div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 sidebar">
                <Tabs
					tabList={this.props.tabList}/>
            </div>
		)
	}
});