import React, {Component} from 'react'

export class BtnSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { btnName, btnClass } = this.props;
        return (
            <div className="form-group account-btn text-center m-t-10">
                <div className="col-xs-12">
                    <button
                        className={`btn w-md btn-bordered ${btnClass} waves-effect waves-light`}
                        type="submit">{btnName}</button>
                </div>
            </div>
        );
    }
}

