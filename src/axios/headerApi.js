import axios from 'axios';

export const getAllMenu = async () => {
    const returnData = await axios.get('menuApi').catch((err) => { console.log("Err:", err) });
    return returnData.data;
}