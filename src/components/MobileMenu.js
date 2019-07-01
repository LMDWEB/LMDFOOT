import React, {Component} from 'react';


class MobileMenu extends Component{
    render(){
        return(
            <div>
                <div className="offcanvas-mobile-menu" id="mobile-menu-overlay">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger">
                        <i className="ion-android-close" />
                    </a>
                    <div className="offcanvas-wrapper">
                        <div className="offcanvas-inner-content">
                        <nav className="offcanvas-navigation">
                            <ul>
                            <li><a href={`${process.env.PUBLIC_URL}/`}>Home</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/news`}>NEWS</a></li>

                            <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</a> </li>
                            </ul>
                        </nav>
                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                            <div className="header-contact-info">
                                <ul className="header-contact-info__list">
                                <li><i className="ion-android-mail" /> <a href="mailto:contact@lmdfoot.com">contact@lmdfoot.com</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="off-canvas-widget-social">
                            <a href="#/" title="Facebook"><i className="fa fa-facebook" /></a>
                            <a href="#/" title="Twitter"><i className="fa fa-twitter" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileMenu;