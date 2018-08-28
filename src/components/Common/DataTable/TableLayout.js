import React, {Component} from 'react'

class TableLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <table
                className="table table-striped add-edit-table table-bordered"
                id="datatable-editable">
                {this.props.children}
            </table>
        );
    }
}

export default TableLayout;