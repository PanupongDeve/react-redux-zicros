import React, {Component} from 'react'
import Submenu2List from './Submenu2List'

export class Submenu2Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderSubmenu2List = () => {
        const lists2 = [
            {
                url: '#',
                title: 'example'
            },
            {
                url: '#',
                title: 'example'
            },
            {
                url: '#',
                title: 'example'
            },
            {
                url: '#',
                title: 'example'
            }
        ] 

        return lists2.map((list, index) => {
            return <Submenu2List 
                        key={index}
                        url={list.url}
                        title2={list.title}
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

