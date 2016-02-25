var SearchInput = React.createClass({
    handleChange: function (e) {
        this.props.onChange(e.target.value);
    },
    render: function(){
        return(
            <input className='form-control'
                   placeholder={this.props.text}
                   onChange={this.handleChange} />
        )
    }
});