import { combineReducers } from "redux";
import { actions } from "./actionTypes";
import { addedProductList, basketAmount, basketCount, products, users } from "./state";


const fetchUserReducer = (state = users, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                user : action.payload
            }
        default:
            return state
    }
}

export const reducer = combineReducers({
    fetchUser : fetchUserReducer
})