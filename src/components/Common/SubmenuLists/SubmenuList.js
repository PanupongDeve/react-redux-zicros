import React, {Component} from 'react';
import { Submenu2Lists } from '../Submenu2Lists';

class SubmenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { title } = this.props;
        return (
            <li className="has-submenu">
                <a href="#">{title}</a>
                <Submenu2Lists {...this.props} />
            </li>
        );
    }
}

export default SubmenuList;