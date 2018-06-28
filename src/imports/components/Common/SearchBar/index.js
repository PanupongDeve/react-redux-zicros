import React, {Component} from 'react';
import {FaSearch} from 'react-icons/lib/fa';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <li className="navbar-c-items">
                <form role="search" className="navbar-left app-search pull-left hidden-xs">
                    <input type="text" placeholder="Search..." className="form-control"/>
                    <a href><FaSearch/></a>
                </form>
            </li>
        );
    }
}

