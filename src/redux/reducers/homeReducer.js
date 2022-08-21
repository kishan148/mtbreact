import { HomeActionTypes } from "../contants/homeActionTypes";
const initialState = {
    sliders: []
}
export const homeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case HomeActionTypes.GET_SLIDERS:
            return { ...state, sliders: payload };
            break;
        case HomeActionTypes.GET_PRODUCTBANNER:
            return { ...state, prodBanner: payload };
            break;
        default:
            return state;
            break;
    }
}