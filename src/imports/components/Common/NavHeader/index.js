import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    NavLogo, 
    NavMenuLists, 
    MenuExtra as ProfileDash
} from '@imports/components/Common'

import Container from '@imports/Layout/Container';

export class NavHeaderWithOutRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const lists = this.props.text.AppBar.en
        return (
            <header id="topnav">
                <div className="topbar-main">
                    <Container>
                        <NavLogo title="Dashboard" {...this.props}/>
                        <ProfileDash {...this.props}/>
                    </Container>
                </div>
                <div className="navbar-custom">
                    <Container>
                        <NavMenuLists 
                            lists={lists} 
                            {...this.props}
                        /> 
                    </Container>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

export const NavHeader = connect(mapStateToProps)(NavHeaderWithOutRedux);




