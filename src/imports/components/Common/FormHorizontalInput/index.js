import React, {Component} from 'react'

export class FormHorizontalInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {label, name, type } = this.props;
        return (
            <div className="form-group">
                <label className="col-md-2 control-label">{label}</label>
                <div className="col-md-10">
                    <input type={type} className="form-control" name={name}  defaultValue="Some text value..."/>
                </div>
            </div>
        );
    }
}

