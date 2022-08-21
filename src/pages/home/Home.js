import React, { useEffect, useState, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

import { getAllSlider, getAllProductBanner } from '../../axios/homeApi';
import { getSlider, getProdBanner } from '../../redux/actions/homeActions';

function Home() {
    const sliders = useSelector((state) => state.allHomeReducer.sliders);
    const productBanner = useSelector((state) => state.allHomeReducer.prodBanner);
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
    const dispatch = useDispatch();

    useEffect(() => {
        const resSliders = getAllSlider().then((res) => {
            dispatch(getSlider(res));
        });
        const resProductBanner = getAllProductBanner().then((res) => {
            dispatch(getProdBanner(res));
        });

        getAllProductBanner

    }, []);


    return (
        <>
            <div className="clearfix"></div>
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
        </>
    )
}

export default memo(Home)