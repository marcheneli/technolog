var TableRow = React.createClass({
	getInitialState: function() {
        return {
            color: this.props.isCurrent ? 'info' : null
        }
    },
    onMouseEnterHandler: function() {
        if(!this.props.isCurrent) this.setState({ color: "active"});
    },
    onMouseLeaveHandler: function() {
        if(!this.props.isCurrent) this.setState({ color: null});
    },
    onClickHandler: function() {
        if(!this.props.isCurrent) {this.setState({ color: null}); this.props.changeCurrent(this.props.item); }
        else {this.setState({ color: "active"}); this.props.changeCurrent(null); }
    },
    onDoubleClickHandler: function() {
        this.props.toolRowDoubleClickHandler(this.props.item);
    },
    render: function() {
        return(
            <tr className={this.props.isCurrent ? 'info' : this.state.color}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
                onClick={this.onClickHandler}
                onDoubleClick={this.onDoubleClickHandler}>
                {this.props.children}
            </tr>
        )
    }
});