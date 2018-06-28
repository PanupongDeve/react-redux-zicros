import React, {Component} from 'react'
import Submenu2List from './Submenu2List'

export class Submenu2Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderSubmenu2List = () => {

        const { submenu2: lists} = this.props;
        return lists.map((list, index) => {
            return <Submenu2List 
                        key={index}
                        url={list.url}
                        title2={list.name}
                        {...this.props}
                    />
        });

    }

    render() {
        return (
            <ul className="submenu">
               {this.renderSubmenu2List()}
            </ul>
        );
    }
}

