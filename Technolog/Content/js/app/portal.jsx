var Portal = React.createClass({
	getInitialState: function () {        
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },
    render: function () {
        return(
            <div className="row full-height">
                <MainSidebar
					tabList={this.state.tabList}
					changeTab={this.changeTab} />
				<MainContentSection currentTab={this.state.currentTab}/>
            </div>
        )
    }
});