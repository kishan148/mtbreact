import { HeaderActionTypes } from "../contants/headerActionTypes";
export const getMenu = (menu) => {
    return {
        type: HeaderActionTypes.GET_MENU,
        payload: menu,
    }
}