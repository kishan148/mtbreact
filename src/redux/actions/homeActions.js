import { HomeActionTypes } from "../contants/homeActionTypes";
export const getSlider = (sliders) => {
    return {
        type: HomeActionTypes.GET_SLIDERS,
        payload: sliders,
    }
}
export const getProdBanner = (prodBanner) => {
    return {
        type: HomeActionTypes.GET_PRODUCTBANNER,
        payload: prodBanner,
    }
}
export const getHomeBanner = (homeBanner) => {
    return {
        type: HomeActionTypes.GET_HOMEBANNER,
        payload: homeBanner,
    }
}