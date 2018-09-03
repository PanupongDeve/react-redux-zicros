import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../class/Redux/actions/FormActions';

class FormInputWithoutConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUnmount() {
        this.props.handleClearForm();
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.props.inputForm(name, value)
        event.preventDefault();
    }

    render() {
        const { grid, type, placeholder, required, name, form } = this.props;
        console.log(form);
        return (
            <div className="form-group">
                <div className={grid}>
                    <input
                        className="form-control"
                        name={name}
                        type={type}
                        required={required}
                        onChange={this.onChange}
                        placeholder={placeholder} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        form: state.form
    }
}

export const FormInput = connect(mapStateToProps , actions)(FormInputWithoutConnect);

