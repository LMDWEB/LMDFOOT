import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BotUI from '../components/BotUI';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class About extends Component{

    constructor () {
        super()
        this.state = {
          website: '',
          role: ''
        }
      }

    componentDidMount() {
        const data = window.localStorage.getItem("currentUser");
        const response = JSON.parse(data);
        this.setState({website: response.user.website, role: response.user.role.name});
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
                    { !this.state.website || this.state.role === "Administrator" ? (
                        <BotUI />
                        ) : (
                        <div>Vous avez déjà crée un site ! Si vous souhaitez en créer d'autres vous devez avoir une offre premium. Pour cela <a href="https://api.lmdfoot.com/">cliquez-ici</a></div> 
                        )
                    }
                </div>
                <Footer/>

                <MobileMenu/>
            </div>
        )
    }
}


export default About;