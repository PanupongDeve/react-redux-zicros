import React, {Component} from 'react'

class AccountContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { onSubmit } = this.props
        return (
            <div className="account-content">
                <form className="form-horizontal" onSubmit={onSubmit}>
                    {this.props.children}
                </form>
                <div className="clearfix"/>
            </div>
        );
    }
}

export default AccountContent;