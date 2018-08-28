import React, {Component} from 'react'

export class CheckboxAccept extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { href } = this.props;
        return (
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="checkbox checkbox-success">
                        <input id="checkbox-signup" type="checkbox" />
                        <label htmlFor="checkbox-signup">I accept
                            <a href={href} target="_blank">Terms and Conditions</a>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
