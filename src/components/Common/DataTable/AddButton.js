import React, {Component} from 'react'

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick = () => {
        const { onAddButtonClick } = this.props;
        onAddButtonClick();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="m-b-30">
                        <button onClick={this.onClick}  className="btn btn-success waves-effect waves-light">Add
                            <i className="mdi mdi-plus-circle-outline"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddButton;