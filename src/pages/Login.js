import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { login } from '../../api/auth'
import {authenticationService} from "../services/authentification.service";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            login(this.state);
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
                                    <h1>Login</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Login</li>
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
                                <div className="col-lg-6 col-12">
                                    <div className="contact-form">
                                        <h3>Connectez-vous</h3>

                                        <Formik
                                            initialValues={{
                                                username: '',
                                                password: ''
                                            }}
                                            validationSchema={Yup.object().shape({
                                                username: Yup.string().required('Username is required'),
                                                password: Yup.string().required('Password is required')
                                            })}
                                            onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                                                setStatus();
                                                authenticationService.login(username, password)
                                                    .then(
                                                        user => {
                                                            const { from } = this.props.location.state || { from: { pathname: "/" } };
                                                            this.props.history.push(from);
                                                        },
                                                        error => {
                                                            setSubmitting(false);
                                                            setStatus(error);
                                                        }
                                                    );
                                            }}
                                            render={({ errors, status, touched, isSubmitting }) => (
                                                <Form>
                                                    <div className="row row-10">
                                                        <div className="col-md-12 col-12 section-space--bottom--20">
                                                            <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                                        </div>
                                                        <div className="col-md-12 col-12 section-space--bottom--20">
                                                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
                                                        </div>
                                                        {status &&
                                                            <div className={'alert alert-danger'}>{status}</div>
                                                        }
                                                    </div>
                                                </Form>
                                            )}
                                        />
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


export default Login;