import React, {Component} from 'react'

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="account-content">
                <form className="form-horizontal" action="#">
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control" type="text" required placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-12">
                            <input
                                className="form-control"
                                type="password"
                                required
                                placeholder="Password"/>
                        </div>
                    </div>
            
                    <div className="form-group account-btn text-center m-t-10">
                        <div className="col-xs-12">
                            <button
                                className="btn w-md btn-bordered btn-danger waves-effect waves-light"
                                type="submit">Log In</button>
                        </div>
                    </div>
                </form>
                <div className="clearfix"/>
            </div>
        );
    }
}
