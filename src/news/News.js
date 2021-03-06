import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { getArticles } from '../../api/news';

class News extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        const articles = await getArticles(20);
        this.setState({articles: articles});
    }

    render(){
        let Datalist = this.state.articles.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                            <a href={`${val.website.link}/${val.id}`}>
                                { val.image ? (
                                    <img src={`${process.env.DOMAIN}${val.image.url}`} className="img-fluid" alt={val.title} />
                                ) : (
                                    <img src="service3.jpg" className="img-fluid" alt={val.title} />
                                )
                                }
                            </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${val.website.link}/${val.id}`}>{val.title}</a>
                        </h3>
                        <p className="subtitle">{val.resume.substring(0, 150)}...</p>
                        <a href={`${val.website.link}/${val.id}`} className="see-more-link">Voir plus</a>
                    </div>
                    </div>
                </div>
            )
        });

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
                                    <h1>News</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>News</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  service page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Service section start*/}
                <div className="service-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Service section end*/}
                </div>

                {/*====================  End of service page content  ====================*/}

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

export default News;