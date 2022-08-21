import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";

const reducer = combineReducers({
    allHomeReducer: homeReducer
})
export default reducer;