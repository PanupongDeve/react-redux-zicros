import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../model/Redux/actions/FormActions';

export class FormHorizontalInputWithoutRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUnmount() {
        this.props.handleClearForm();
    }

    onFormChang = (event) => {
        const { name, value } = event.target;
        
        this.props.inputForm(name, value);
        event.preventDefault();
    }

    render() {
        const {label, name, type, form } = this.props;
        return (
            <div className="form-group">
                <label className="col-md-2 control-label">{label}</label>
                <div className="col-md-10">
                    <input type={type} className="form-control" name={name} value={form[name] || ''}  onChange={this.onFormChang}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.form
    }
}


export const FormHorizontalInput = connect(mapStateToProps,actions)(FormHorizontalInputWithoutRedux);



