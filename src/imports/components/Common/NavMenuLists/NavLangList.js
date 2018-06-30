import React, {Component} from 'react'
import { FaLanguage } from 'react-icons/lib/fa';

class NavLangList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <li className="has-submenu">
                <a href="#"><FaLanguage size={32} style={style.mr5} />language</a>
                <ul className="submenu" style={style.center}>
                    <li>
                        <a href="index.html">ไทย</a>
                    </li>
                    <li>
                        <a href="dashboard_2.html">อังฤษ</a>
                    </li>
                </ul>
            </li>
        );
    }
}

const style = {
    mr5: {
        marginRight: "5px"
    },
    center: {
        textAlign: "center"
    }
}

export default NavLangList;
