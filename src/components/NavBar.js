import React, {Component} from 'react';
import { authenticationService } from '../services/authentification.service';
import history from '../helpers/history';

class NavBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };

        if (authenticationService.currentUserValue) { 
            history.push('/');
        }
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render(){
        const { currentUser } = this.state;
        return(
            <div >
                <div className="header-area header-sticky header-sticky--default">
                    <div className="header-area__desktop header-area__desktop--default">
                    <div className="header-top-bar header-navigation__nav position-static">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            {!currentUser ? (
                                <div className="top-bar-right-wrapper">
                                    <a href={`${process.env.PUBLIC_URL}/login`} className="ht-btn ht-btn--default d-inline-block">Login</a>
                                    <a href={`${process.env.PUBLIC_URL}/register`} className="ht-btn ht-btn--default d-inline-block">Register</a>
                                </div>
                            ) : (
                                <div className="top-bar-right-wrapper">
                                    <a href={`${process.env.PUBLIC_URL}/register`} className="ht-btn ht-btn--default d-inline-block">{ this.state.currentUser.user.username }</a>
                                    <a onClick={this.logout} className="ht-btn ht-btn--default d-inline-block">Déconnexion</a>
                                </div>
                            )
                            } 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    <div className="logo">
                                    <a href={`${process.env.PUBLIC_URL}/`}>
                                        <img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo" />
                                    </a>
                                    </div>
                                    <div className="top-bar-right-wrapper">
                                        <a href={`${process.env.PUBLIC_URL}/website`} className="ht-btn ht-btn--default d-inline-block">Create Website</a>
                                    </div>
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger">
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                            <nav>
                                                <ul>
                                                    <li>
                                                        <a href={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</a>
                                                    </li>
                                                    <li className="has-children has-children--multilevel-submenu">
                                                        <a href={`${process.env.PUBLIC_URL}/services`}>SERVICE</a>
                                                    </li>
                                                    <li>
                                                        <a href={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default NavBar;