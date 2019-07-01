import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import {authenticationService} from "../services/authentification.service";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../helpers/history';

class Register extends Component{
    notify = () => toast("Wow so easy !");

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
                                <Formik
                                    initialValues={{
                                        username: '',
                                        email: '',
                                        password: ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        username: Yup.string().required('Username is required').min(5),
                                        email: Yup.string().required('E-mail is required'),
                                        password: Yup.string().required('Password is required').min(5)
                                    })}
                                    onSubmit={({ username, email, password }, { setStatus, setSubmitting }) => {
                                        setStatus();

                                        authenticationService.registerUser(username, email, password);
                                        history.push('/');
                                    }}
                                    render={({ errors, status, touched, isSubmitting }) => (
                                        <Form>
                                            <div className="row row-10">
                                                <div className="col-md-12 col-12 section-space--bottom--20">
                                                    <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="col-md-12 col-12 section-space--bottom--20">
                                                    <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="col-md-12 col-12 section-space--bottom--20">
                                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="col-12">
                                                    <button  type="submit" className="btn btn-primary" disabled={isSubmitting}>S'inscrire</button>
                                                </div>
                                                {status &&
                                                    <div className={'alert alert-danger'}>{status}</div>
                                                }
                                                <ToastContainer />
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


export default Register;