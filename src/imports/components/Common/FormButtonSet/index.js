import React, {Component} from 'react'

export class FormButtonSet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onSubmitClick = (event) => {
        const { onBtnSuccessClick } = this.props;
        onBtnSuccessClick();

        event.preventDefault();
    }

    onCancelClick = (event) => {
        const { onBtnCancelClick } = this.props;
        onBtnCancelClick();

        event.preventDefault();
    }


    render() {
        const { btnSuccess, btnCancel} = this.props;
        return (
            <div className="form-group m-b-0">
                <div className="col-sm-offset-2 col-sm-9">
                    <button onClick={this.onSubmitClick} className="btn btn-info waves-effect waves-light">{btnSuccess}</button>
                    <button onClick={this.onCancelClick} style={style.btnCancel} className="btn btn-danger waves-effect waves-light">{btnCancel}</button>
                </div>
            </div>

        );
    }
}

const style = {
    btnCancel: {
        marginLeft: '5px'
    }
}
