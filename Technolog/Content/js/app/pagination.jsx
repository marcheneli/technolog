var PageButton = React.createClass({
    handleClick: function(){
        this.props.onClick(this.props.pageNumber);
    },
    render: function () {
        return(
            <li><a href="#"></a></li>
        )
    }
});
var Pagination = React.createClass({
    pageButtonClickHandler: function(){
        
    },
    render: function () {
        var pageButtons = [];
        
        for (var i = 0; i < this.state.pageAmount; i++) {
            pageButtons.push(<PageButton onClick={pageButtonClickHandler} pageNumber={i} />)
        }

        return(
            <nav>
                <ul className="pagination">
                    {pageButtons}
                </ul>
            </nav>
        )
    }
});