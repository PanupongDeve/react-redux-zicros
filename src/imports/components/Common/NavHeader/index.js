import React, {Component} from 'react'
import './style.css';
import {connect} from 'react-redux'
import $ from 'jquery';

import {NavLogo, NavMenuLists, MenuExtra as ProfileDash} from '@imports/components/Common'

import Container from '@imports/Layout/Container';

export class NavHeaderWithOutRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.compose();
    }

    compose = () => {
        this.initNavbar();
        this.initMenuActiveUrl();
    }



    initNavbar = () => {
        $('.navbar-toggle')
            .on('click', function (event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });

        $('.navigation-menu>li')
            .slice(-2)
            .addClass('last-elements');

        $('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this)
                    .parent('li')
                    .toggleClass('open')
                    .find('.submenu:first')
                    .toggleClass('open');
            }
        });
    }

    initSlimscroll = () => {
        $('.slimscroll-noti').slimScroll({height: '230px', position: 'right', size: "5px", color: '#98a6ad', wheelStep: 10});
    }

    initMenuActiveUrl = () => {
        // === following js will activate the menu in left side bar based on url ====
        $(document)
            .ready(function () {
                $(".navigation-menu a")
                    .each(function () {
                        var pageUrl = window
                            .location
                            .href
                            .split(/[?#]/)[0];
                        if (this.href == pageUrl) {
                            $(this)
                                .parent()
                                .addClass("active"); // add active to li of the current link
                            $(this)
                                .parent()
                                .parent()
                                .parent()
                                .addClass("active"); // add active class to an anchor
                            $(this)
                                .parent()
                                .parent()
                                .parent()
                                .parent()
                                .parent()
                                .addClass("active"); // add active class to an anchor
                        }
                    });
            });
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
                        <NavMenuLists lists={lists} {...this.props}/>
                    </Container>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {text: state.text}
}

export const NavHeader = connect(mapStateToProps)(NavHeaderWithOutRedux);
