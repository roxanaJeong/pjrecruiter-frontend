import { combineReducers } from "redux";
import questReducer from "./questReducer";

const rootReducer = combineReducers({
    questReducer,
});

export default rootReducer;
