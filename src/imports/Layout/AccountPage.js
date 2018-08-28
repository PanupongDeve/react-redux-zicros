import React, {Component} from 'react'

class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="m-t-40 account-pages">
                {this.props.children}
            </div>
        );
    }
}

export default AccountPage;