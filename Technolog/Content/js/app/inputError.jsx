var InputError = React.createClass({
  render: function(){
    return (
      <div>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
});