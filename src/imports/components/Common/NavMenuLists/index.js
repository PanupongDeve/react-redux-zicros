import React, {Component} from 'react';
import NavMenuList from './NavMenuList';
import { FaCog, FaCoffee, FaColumns} from 'react-icons/lib/fa';

export class NavMenuLists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderNavMenu = () => {
        
        const { lists } = this.props
        return lists.map((list, index) => {
            return <NavMenuList 
                    key={index}
                    head={list.head}
                    Icon={list.Icon}
                    submenu={list.submenu}
                    {...this.props}
                />
        });
    }

    render() {
        return (
            <div id="navigation">
                <ul className="navigation-menu">
                    {this.renderNavMenu()}  
                </ul>
            </div>
        );
    }
}
