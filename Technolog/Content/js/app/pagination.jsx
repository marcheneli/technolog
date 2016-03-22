var PageButton = React.createClass({
    handleClick: function(){
        this.props.onClick(this.props.pageNumber);
    },
    render: function () {
        return(
            <li className={this.props.mode}><a href="#" onClick={this.handleClick}>{this.props.symbol}</a></li>
        )
    }
});
var Pagination = React.createClass({
    getInitialState: function () {
        return{
            currentPage: 0
        }
    },
    pageButtonClickHandler: function (pageNumber) {
        var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);

        if (pageNumber == -1 && this.state.currentPage != 0) {
            this.setState({ currentPage: this.state.currentPage - 1});
            this.props.updatePage(this.state.currentPage - 1);
        }

        if (pageNumber == -2 && this.state.currentPage != totalPageAmount - 1) {
            this.setState({ currentPage: this.state.currentPage + 1});
            this.props.updatePage(this.state.currentPage + 1);
        }

        if (pageNumber >= 0 && pageNumber != this.state.currentPage) {
            this.setState({ currentPage: pageNumber}); 
            this.props.updatePage(pageNumber);       
        }
    },
    render: function () {
        var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);
        var pageButtons = [];

        if (totalPageAmount > 0) {
			if(totalPageAmount != 1 && this.state.currentPage != 0){
				pageButtons.push(<PageButton key={0} onClick={this.pageButtonClickHandler} symbol={this.props.firstSymbol} pageNumber={0} />);
				pageButtons.push(<PageButton key={1} onClick={this.pageButtonClickHandler} symbol={this.props.prevSymbol} pageNumber={-1} />);
			}

			for (var i = 0; i < totalPageAmount; i++) {
				if(this.state.currentPage == i){
					pageButtons.push(<PageButton key={i + 2} mode='active' onClick={ function () {} } symbol={i + 1} pageNumber={i} />);
				} else {
					pageButtons.push(<PageButton key={i + 2} mode='' onClick={this.pageButtonClickHandler} symbol={i + 1} pageNumber={i} />);
				}
				
			}

			if(totalPageAmount != 1 && this.state.currentPage != totalPageAmount - 1){
				pageButtons.push(<PageButton key={i + 3} onClick={this.pageButtonClickHandler} symbol={this.props.nextSymbol} pageNumber={-2} />);
				pageButtons.push(<PageButton key={i + 4} onClick={this.pageButtonClickHandler} symbol={this.props.lastSymbol} pageNumber={totalPageAmount - 1} />);
			}
		}

        return(
            <div className="pull-right">
                <ul className="pagination pull-right" style={{ marginTop: 0 + 'px', marginBottom: 0 + 'px'}}>
                    {pageButtons}
                </ul>
            </div>
        )
    }
});