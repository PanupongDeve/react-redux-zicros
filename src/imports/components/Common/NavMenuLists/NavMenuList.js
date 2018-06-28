import React, {Component} from 'react';
import { SubmenuLists } from '../SubmenuLists';

class NavMenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { head, Icon, submenu } = this.props
        return (
            <li className="has-submenu">
                <a href="#"><Icon size={32} style={style.mr5} />{head}</a>
                <SubmenuLists 
                    submenu={submenu}
                    {...this.props}
                />
            </li>
        );
    }
}

const style = {
    mr5: {
        marginRight: "5px"
    }
}

export default NavMenuList;