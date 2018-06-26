import React, {Component} from 'react'

export class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { grid, type, placeholder, required, name} = this.props;
        return (
            <div className="form-group">
                <div className={grid}>
                    <input
                        className="form-control"
                        name={name}
                        type={type}
                        required={required}
                        placeholder={placeholder} />
                </div>
            </div>
        );
    }
}

