import axios from 'axios';

export const getAllSlider = async () => {
    const resSliders = await axios.get('http://mtb.merge.ks/api/v1/sliderApi').catch((err) => { console.log("Err:", err) });
    return resSliders.data;
}

export const getAllProductBanner = async () => {
    const resSliders = await axios.get('http://mtb.merge.ks/api/v1/productBannerApi').catch((err) => { console.log("Err:", err) });
    return resSliders.data;
}