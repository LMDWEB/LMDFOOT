import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { getArticle } from '../../api/news';

class NewsDetails extends Component{

    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;

        const article = await getArticle(id);
        this.setState({article: article});

        console.log(this.state.article.title)
    }

    render(){

        const {article} = this.state;

        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    {/* <h1>{article.title}</h1> */}
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href={`${process.env.DOMAIN}/`}>News</a></li>
                                        <li>{/*{article.title}*/}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--120">
                    {/*Service section start*/}
                    <div className="service-section">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <div className="service-details">
                                {/* service gallery */}
                                {/* <ServiceGallery/> */}
                                {/* <img src="{/*{article.content}*/}" alt="{/*{article.content}*/}" /> */}

                                <div className="content section-space--top--30">
                                <div className="row">
                                    <div className="col-12">
                                        <strong>{/*{article.resume}*/}</strong>
                                        {/*{article.content}*/}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-12 order-2 order-lg-1">
                                <Sidebar />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*Service section end*/}
                    </div>

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default NewsDetails;