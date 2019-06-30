import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BotUI from '../components/BotUI';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class About extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

    render(){
        return(
            <div>
                <NavBar/>
                {/* breadcrumb */}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Crée ton site</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Crée ton site</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-wrapper">
                    <BotUI />
                </div>
                <Footer/>

                <MobileMenu/>
            </div>
        )
    }
}


export default About;