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

        let data = [
            {image: {src: 'https://psgimages.stadion.io/media/27038/une-home920.jpg?center=0.36996336996337,0.45853658536585368&mode=crop&width=2000&height=1125&quality=80' }, title: 'Bienvenue sur LMDFOOT', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', link: 'contact-us'},
            {image: {src: 'https://www.letelegramme.fr/images/2019/07/02/les-usa-affronteront-la-suede-ou-les-pays-bas-dimanche_4668209.jpg' }, title: 'Toute  l\'actualité du football', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', link: 'contact-us'},
            {image: {src: 'http://contre-pied.blog.lemonde.fr/files/2018/07/7794066787_les-bleus-avant-le-coup-d-envoi-contre-la-belgique-le-10-juillet-a-saint-petersourg.jpg' }, title: 'Vivez votre passion', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', link: 'contact-us'}
        ];

        let DataNews = (this.state.articles.length > 0) ? this.state.articles : data;

        let DataList = DataNews.map((val, i)=>{
            let image = (val.image) ? process.env.DOMAIN + val.image.url : 'https://psgimages.stadion.io/media/27038/une-home920.jpg?center=0.36996336996337,0.45853658536585368&mode=crop&width=2000&height=1125&quality=80';

            return(
                
                <div className="swiper-slide" key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(${image})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content">
                                    <h2 className="hero-slider__title">{val.title}</h2>
                                    <p className="hero-slider__text">{val.resume}</p>
                                    <a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/news/${val.id}`}> GET START</a>
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