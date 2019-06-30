import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderOne from './components/HeroSliderOne';
import ServiceGridSlider from './components/ServiceGridSlider';
import Funfact from './components/Funfact';
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class Home extends Component{
    render(){
        
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>
                
                {/* Fun fact */}
                <Funfact/>
                
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


export default Home;