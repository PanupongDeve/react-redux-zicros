import React, {Component} from 'react'
import {ProfileLists} from '../ProfileLists';

export class ProfileBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <li className="dropdown navbar-c-items">
                <a
                    href
                    className="dropdown-toggle waves-effect waves-light profile"
                    data-toggle="dropdown"
                    aria-expanded="true"><img
                    src="assets/images/users/avatar-1.jpg"
                    alt="user-img"
                    className="img-circle"/>
                </a>
                <ProfileLists title="Pikachu" {...this.props}/>
            </li>
        );
    }
}
