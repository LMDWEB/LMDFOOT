import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import axios from 'axios';
import { cpus } from 'os';

class Services extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        axios.get(`${process.env.DOMAIN}/articles?_limit=20`)
        .then(({ data }) => {
            this.setState({ articles: data});
        })
    }

    render(){
        let dataNews = [
            {pageLink: 'service-details-left-sidebar', img: 'service1.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'Land Minning', serviceSubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'service-details-left-sidebar', img: 'service2.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Work Management', serviceSubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'service-details-left-sidebar', img: 'service3.jpg', iconClass: 'flaticon-015-cart', serviceTitle: 'Material Engineering', serviceSubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'service-details-left-sidebar', img: 'service-3.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: 'Power and Energy', serviceSubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'service-details-left-sidebar', img: 'service-2.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Land Minning', serviceSubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'service-details-left-sidebar', img: 'service-1.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'Work Management', serviceSubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'}
        ];


        let Datalist = this.state.articles.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                            <a href={`${process.env.DOMAIN}/${val.id}`}>
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
                        <a href={`${process.env.DOMAIN}/${val.id}`}>{val.title}</a>
                        </h3>
                        <p className="subtitle">{val.resume.substring(0, 180)}</p>
                        <a href={`${process.env.DOMAIN}/${val.link}`} className="see-more-link">Voir plus</a>
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
                                    <h1>Service</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Service</li>
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

export default Services;