import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { getArticles } from '../../api/news';

class HeroSliderOne extends Component{
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }
    
    async componentDidMount() {
        const articles = await getArticles(20, true);
        this.setState({articles: articles});
    }

    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        }

        let DataList = this.state.articles.map((val, i)=>{
            return(
                
                <div className="swiper-slide" key={i}>
                    
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url()` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-slider__content">
                                            <h2 className="hero-slider__title">{val.title}</h2>
                                            <p className="hero-slider__text">{val.resume}</p>
                                            <a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                <div className="hero-alider-area">
                    <Swiper {...params}>
                        {DataList}
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default HeroSliderOne;