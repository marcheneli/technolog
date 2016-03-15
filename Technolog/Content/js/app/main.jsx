var Main = React.createClass({
    render: function(){
        return(
            <div className="row full-height">
				<ErrorNotifier />
                <MainSidebar tabList={tabList} />
                <MainContentSection>
                    {this.props.children}
                </MainContentSection>
            </div>
        )
    }
});