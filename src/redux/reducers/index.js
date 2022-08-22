import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { homeReducer } from "./homeReducer";

const reducer = combineReducers({
    allHeaderReducer: headerReducer,
    allHomeReducer: homeReducer,
})
export default reducer;