import React, {Component} from 'react';
import {FaSearch} from 'react-icons/lib/fa';

import { NavLogo, ProfileLists, NavMenuLists } from '@imports/components/Common'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <body>
                {/* Navigation Bar*/}
                <header id="topnav">
                    <div className="topbar-main">
                        <div className="container">
                            <NavLogo title="Dashboard" {...this.props}/>
                            <div className="menu-extras">
                                <ul className="nav navbar-nav navbar-right pull-right">
                                    <li className="navbar-c-items">
                                        <form role="search" className="navbar-left app-search pull-left hidden-xs">
                                            <input type="text" placeholder="Search..." className="form-control"/>
                                            <a href><FaSearch /></a>
                                        </form>
                                    </li>
                                    
                                    <li className="dropdown navbar-c-items">
                                        <a
                                            href
                                            className="dropdown-toggle waves-effect waves-light profile"
                                            data-toggle="dropdown"
                                            aria-expanded="true"><img
                                            src="assets/images/users/avatar-1.jpg"
                                            alt="user-img"
                                            className="img-circle"/>
                                        </a>
                                        <ProfileLists title="Pikachu" {...this.props}/>
                                    </li>
                                </ul>
                                <div className="menu-item">
                                    {/* Mobile menu toggle*/}
                                    <a className="navbar-toggle">
                                        <div className="lines">
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                    </a>
                                    {/* End mobile menu toggle*/}
                                </div>
                            </div>
                            {/* end menu-extras */}
                        </div>
                        {/* end container */}
                    </div>
                    {/* end topbar-main */}
                    <div className="navbar-custom">
                        <div className="container">
                            <div id="navigation">
                                {/* Navigation Menu*/}
                                    <NavMenuLists />
                                {/* End navigation menu */}
                            </div>
                            {/* end #navigation */}
                        </div>
                        {/* end container */}
                    </div>
                    {/* end navbar-custom */}
                </header>

                {this.props.children}
            </body>
        );
    }
}

export default DashBoard;