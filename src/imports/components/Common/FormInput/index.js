import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '@imports/redux/actions';

class FormInputWithoutConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUnmount() {
        this.props.handleClearForm();
    }

    onChange = (event) => {
        const { handleChangeForm } = this.props;
        const { name, value } = event.target;
        handleChangeForm(name, value)
        event.preventDefault();
    }

    render() {
        const { grid, type, placeholder, required, name } = this.props;
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

