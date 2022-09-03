import axios from 'axios';

export const getAllMenu = async () => {
    const returnData = await axios.get('menuApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}

export const getMenuBrand = async () => {
    const returnData = await axios.get('menuBrandApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}

export const getMenuActiveAndInactiveBrand = async () => {
    const returnData = await axios.get('menuActiveAndInactiveBrandApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}