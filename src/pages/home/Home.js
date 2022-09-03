import React, { useEffect, useState, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

import { getAllSlider, getAllProductBanner, getAllHomeBanner } from '../../axios/homeApi';
import { getSlider, getProdBanner, getHomeBanner } from '../../redux/actions/homeActions';

function Home() {
    const [sliderLoading, setSliderLoading] = useState(true);
    const [prodBannerLoading, setProdBannerLoading] = useState(true);
    const [homeBannerLoading, setHomeBannerLoading] = useState(true);
    //const sliders = useSelector((state) => state.allHomeReducer.sliders);
    //const productBanner = useSelector((state) => state.allHomeReducer.prodBanner);
    //const homeBanner = useSelector((state) => state.allHomeReducer.homeBanner);
    const [sliders, setSliders] = useState('');
    const [productBanner, setProductBanner] = useState('');
    const [homeBanner, setHomeBanner] = useState('');
    const settings = {
        customPaging: function (i) {
            return (
                <a href='/#'>1</a>
            );
        },
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    const newProductAndPopulerSettings = {
        className: 'product-slider slick-dotted',
        customPaging: function (i) {
          return (
            <a href='/#'>1</a>
          );
        },
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: false,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      };
    const dispatch = useDispatch();

    useEffect(() => {
        getAllSlider().then((res) => {
            //dispatch(getSlider(res));
            setSliders(res);
            setSliderLoading(false);
        });
        getAllProductBanner().then((res) => {
            //dispatch(getProdBanner(res));
            setProductBanner(res);
            setProdBannerLoading(false);
        });
        getAllHomeBanner().then((res) => {
            //dispatch(getHomeBanner(res));
            setHomeBanner(res);
            setHomeBannerLoading(false);
        });
    }, []);


    return (
        <>
            <div className="clearfix"></div>
            {sliderLoading && <Skeleton height={425} />}
            {(sliders !== '') ?
                <div className="slider_area wow fadeInUp animated animated animated">
                    <div className="container-fluid">
                        <div className="h_btn">
                            <ul className="slides">
                                <Slider {...settings}>
                                    {sliders.map((items, key) => (
                                        <li key={key}>
                                            <div className="slide-container"><img draggable="false" src={items.image} alt={items.name} />
                                                <div className="carousel-caption">
                                                    <div className="button">
                                                        <a href={items.linkUrl} className="btn btn-warning_reverse">jetzt kaufen <i className="fa fa-angle-right padd_left5"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
                : null}
            <div className="clearfix"></div>
            <div className="product_banner_info">
                <div className="container">
                    <div className="row">
                        {prodBannerLoading &&
                            <>
                                <div className="col-sm-4"><div className="product_banner_info_img"><Skeleton height={123} /></div></div>
                                <div className="col-sm-4"><div className="product_banner_info_img"><Skeleton height={123} /></div></div>
                                <div className="col-sm-4"><div className="product_banner_info_img"><Skeleton height={123} /></div></div>
                                <div className="col-sm-4"><div className="product_banner_info_img"><Skeleton height={123} /></div></div>
                                <div className="col-sm-4"><div className="product_banner_info_img"><Skeleton height={123} /></div></div>
                                <div className="col-sm-4"><div className="product_banner_info_img"><Skeleton height={123} /></div></div>
                            </>
                        }
                        {(productBanner !== '') ?
                            productBanner.map((items, key) => (
                                <div key={key} className="col-sm-4">
                                    <a href={items.link} className="banner_sm_hover">
                                        <div className="product_banner_info_img">
                                            <img src={items.image} alt="Federung" title="Federung" />
                                            <div className="product_banner_info_cont">
                                                <h2>{items.name}</h2>
                                                <h4>shoppen</h4>
                                            </div>
                                            <div className="banner_bg"></div>
                                        </div>
                                    </a>
                                </div>
                            )) : null}
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="container">
                <div className="home_banner_area">
                    <div className="row gutter_10">
                        {homeBannerLoading &&
                            <>
                                <div className="col-sm-6"><Skeleton height={162} /></div>
                                <div className="col-sm-6"><Skeleton height={162} /></div>
                            </>
                        }
                        {(homeBanner !== '') ?
                            homeBanner.map((items, key) => (
                                <div key={key} className="col-sm-6">
                                    <div className="row gutter_10">
                                        <div className="col-sm-12">
                                            <div className="home_pro_banner">
                                                <a href={items.link} className="home_banner_lg_effect">
                                                    <div className="home_pro_banner_img">
                                                        <img src={items.image} style={{ maxHeight: '164px', maxWidth: '465px' }} alt={items.name} title={items.name} />
                                                        <div className="home_pro_banner_img_cont cont_set">
                                                            <h2>{items.name}</h2>
                                                            <h4>shoppen</h4>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    )
}

export default memo(Home)