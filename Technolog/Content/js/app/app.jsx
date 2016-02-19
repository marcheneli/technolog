var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        {this.props.token}
      </div>
    );
  }
});