import productReducers from "./productReducers";
import todoReducers from "./todoReducers";
import userReducers from "./userReducers";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    todo:todoReducers,
    users:userReducers,
    product:productReducers,
})

// const rootReducer = combinedReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer,
// });
export default rootReducer;