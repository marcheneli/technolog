var InputError = React.createClass({
  render: function(){
    return (
      <div>
        <span style={{ color: 'red' }}>{this.props.errorMessage}</span>
      </div>
    )
  }
});