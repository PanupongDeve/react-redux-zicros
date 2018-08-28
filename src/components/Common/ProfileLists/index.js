import React, {Component} from 'react';
import {ProfileList} from './ProfileList';
import { TiUserOutline, TiPower }from 'react-icons/lib/ti'

export class ProfileLists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderProfileList = (lists) => {
        return lists.map((list, index) => {
            return <ProfileList 
                        key={index}
                        name={list.name}
                        url={list.url}
                        Icon={list.Icon}
                        {...this.props}
                    />
        });
    }

   

    render() {
        const {title} = this.props;

        const lists = [
            {
                name: 'Profile',
                url: '/login',
                Icon: TiUserOutline
            },
            {
                name: 'Logout',
                url: '/logout',
                Icon: TiPower
            }
        ]
        return (
            <ul
                className="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list">

                <li className="text-center">
                    <h5>Hi, {title}</h5>
                </li>

                {this.renderProfileList(lists)}

            </ul>
        );
    }
}
