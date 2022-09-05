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
export const getHomeManufacturer = async () => {
    const returnData = await axios.get('getHomeManufacturerApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}
export const getNewProducts = async () => {
    const returnData = await axios.get('getNewProductsApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}

