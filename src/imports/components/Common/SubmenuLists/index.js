import React, {Component} from 'react';
import SubmenuList from './SubmenuList';

export class SubmenuLists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderMenuList = () => {
        const lists = ['Example1', 'Example2', 'Example3'];
        return lists.map((list, index) => {
            return <SubmenuList 
                        key={index}
                        title={list}
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

