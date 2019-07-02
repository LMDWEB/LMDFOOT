import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderOne from './components/HeroSliderOne';
import NewsGridSlider from './components/NewsGridSlider';
import Funfact from './components/Funfact';
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class HomeCMS extends Component{

    componentDidMount() {
        console.log(window.location.hostname);
    }

    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                {/* Service grid slider */}
                <NewsGridSlider/>
                
                
                {/* Brand logo */}
                <BrandLogoSlider background = "" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>
            </div>
        )
    }
}


export default HomeCMS;