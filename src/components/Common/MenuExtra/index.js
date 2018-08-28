import React, {Component} from 'react';
import { 
    ProfileBar, 
    SearchBar,
    BurgurBar,
    LangBar 
} from '../../Common'

export class MenuExtra extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="menu-extras">
                <ul className="nav navbar-nav navbar-right pull-right">
                    <SearchBar {...this.props}/>
                    <ProfileBar {...this.props}/>
                    <LangBar {...this.props}/>
                </ul>
                <BurgurBar {...this.props}/>
            </div>
        );
    }
}

