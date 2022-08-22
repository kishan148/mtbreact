import axios from 'axios';

export const getAllSlider = async () => {
    const returnData = await axios.get('sliderApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}

export const getAllProductBanner = async () => {
    const returnData = await axios.get('productBannerApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}
export const getAllHomeBanner = async () => {
    const returnData = await axios.get('homeBannerApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}