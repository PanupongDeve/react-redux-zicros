import React, {Component} from 'react';
import SubmenuList from './SubmenuList';

export class SubmenuLists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderMenuList = () => {
        const { submenu: lists} = this.props
        return lists.map((list, index) => {
            return <SubmenuList 
                        key={index}
                        title={list.name}
                        submenu2={list.submenu2}
                        {...this.props}
                    />
        })
    }

    render() {
        return (
            <ul className="submenu">
               {this.renderMenuList()}     
            </ul>
        );
    }
}

