import React, {Component} from 'react';
import NavMenuList from './NavMenuList';
import { FaCog, FaCoffee, FaColumns} from 'react-icons/lib/fa';

export class NavMenuLists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderNavMenu = () => {
        const lists = [
            {
                head:'Component',
                Icon: FaColumns
            },{
                head:'UI',
                Icon: FaCoffee
            },{
                head:'Code',
                Icon: FaCog
            }
        ];
        return lists.map((list, index) => {
            return <NavMenuList 
                    key={index}
                    head={list.head}
                    Icon={list.Icon}
                />
        });
    }

    render() {
        return (
            <ul className="navigation-menu">
                {this.renderNavMenu()}  
            </ul>
        );
    }
}
