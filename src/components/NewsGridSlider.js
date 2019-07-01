import React, {Component} from 'react';
import axios from 'axios';

class NewsGridSlider extends Component{
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        axios.get(`${process.env.DOMAIN}/articles?_limit=20&status=Published`)
        .then(({ data }) => {
            this.setState({ articles: data});
        })
    }

    render(){
        let DataList = this.state.articles.map((val, i) => {
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
                        <p className="subtitle">{val.resume.substring(0, 150)}...</p>
                        <a href={`${process.env.DOMAIN}/${val.link}`} className="see-more-link">Voir plus</a>
                    </div>
                    </div>
                </div>
            )
        });
        
        return(
            <div>
                <div className="service-grid-slider-area section-space--inner--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center">
                                <h2 className="section-title section-space--bottom--50">News</h2>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-item-wrapper">
                                    <div className="row">
                                        {DataList}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsGridSlider;