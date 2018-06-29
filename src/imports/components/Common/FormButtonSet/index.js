import React, {Component} from 'react'

export class FormButtonSet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const { btnSuccess, btnCancel} = this.props;
        return (
            <div className="form-group m-b-0">
                <div className="col-sm-offset-2 col-sm-9">
                    <button className="btn btn-info waves-effect waves-light">{btnSuccess}</button>
                    <button style={style.btnCancel} className="btn btn-danger waves-effect waves-light">{btnCancel}</button>
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
