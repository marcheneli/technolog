﻿var ItemsPerPageSelector = React.createClass({
    getInitialState: function() {
        return{
            itemsPerPage: PageConstants.ITEMS_PER_PAGE_INIT,
            dropdowndisplay:'none',
            isButtonClicked: false
        }
    },
    componentWillMount: function () {
        document.addEventListener('click', this.pageClick, false);
    },

    componentWillUnmount: function () {
        document.removeEventListener('click', this.pageClick, false);
    },
    pageClick: function (e) {
        if (this.state.dropdowndisplay == 'none') return;

        if (this.state.isButtonClicked) {
            this.setState({
                itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'block', isButtonClicked: false
            });

            return;
        }

        this.setState({
            itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'none', isButtonClicked: false
        });
    },
    toggleDropDown: function(e){
        if (this.state.dropdowndisplay == 'none')
            this.setState({ itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'block', isButtonClicked: true });

        if (this.state.dropdowndisplay == 'block')
            this.setState({ itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'none', isButtonClicked: false});
    },
    updateItemsPerPage: function(itemsPerPage) {
        this.setState({
            itemsPerPage: itemsPerPage, dropdowndisplay: 'none', isButtonClicked: this.state.isButtonClicked
        });
        this.props.onChange(itemsPerPage)
    },
    render: function() {
        return(
            <div className="input-group-btn">
                <button type="button" className="btn btn-default">{this.state.itemsPerPage}</button>
                <button type="button" className="btn btn-default dropdown-toggle" dataToggle="dropdown" onClick={this.toggleDropDown}>
                    <span className="caret"></span>
                    <span className="sr-only">Split button!</span>
                </button>
                <ul className="dropdown-menu" role="menu" style={{ display: this.state.dropdowndisplay }}>
                    <li>
                        <a href="#" 
                           style={{cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }} 
                           onClick={ function() { this.updateItemsPerPage(10); }.bind(this) }>
                            10
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           style={{cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }}
                           onClick={ function() { this.updateItemsPerPage(20); }.bind(this) }>
                            20
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           style={{cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }}
                           onClick={ function() { this.updateItemsPerPage(30); }.bind(this) }>
                            30
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           style={{cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }}
                           onClick={ function() { this.updateItemsPerPage(40); }.bind(this) }>
                            40
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           style={{cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }}
                           onClick={ function() { this.updateItemsPerPage(50); }.bind(this) }>
                            50
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
});