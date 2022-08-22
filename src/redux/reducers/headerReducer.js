import { HeaderActionTypes } from "../contants/headerActionTypes";
const initialState = {
    menu: [],
}
export const headerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case HeaderActionTypes.GET_MENU:
            return { ...state, menu: payload };
            break;
        default:
            return state;
            break;
    }
}