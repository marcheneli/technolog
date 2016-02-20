var ToolList = React.createClass({
    render: function() {
        return(
            <div className="panel panel-default full-height" style={{width: 600 + 'px', marginBottom: 0 + 'px'}}>
                <div className="panel-heading">Инструменты</div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Наименование</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tools.map(function(tool, index) {
                                return(
                                    <tr key={index}>
                                        <td>{tool.id}</td>
                                        <td>{tool.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});
var ToolListSection = React.createClass({
    getInitialState: function() {
        return {
            tools: []
        }
    },
    componentDidMount: function() {
        $.get("api/tools", function(tools){
            this.setState({ tools: tools})
        }.bind(this));
    },
    render: function() {
        return(
            <div className="full-height">
                <ToolList tools={this.state.tools}/>
            </div>
        )
    }
});