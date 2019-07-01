import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { registerUser } from '../../api/auth';
import history from '../helpers/history';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        registerUser(this.state);
        this.props.history.push('/');

        event.preventDefault();
      }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Register</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper section-space--inner--120">
                    <div className="conact-section">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                            <div className="contact-form">
                                <h3>Inscrivez-vous</h3>
                                <form id="contact-form" onSubmit={this.handleSubmit}>
                                    <div className="row row-10">
                                        <div className="col-md-12 col-12 section-space--bottom--20">
                                            <input name="username" type="text" placeholder="Your Name" value={this.state.username} onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-md-12 col-12 section-space--bottom--20">
                                            <input name="email" type="email" placeholder="Your Email" value={this.state.email} onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-md-12 col-12 section-space--bottom--20">
                                            <input name="password" type="password" placeholder="Your Password" value={this.state.password} onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-12"><button type="submit">S'inscrire</button></div>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Register;