import axios from "axios";
import { put } from "redux-saga/effects";
import { actions } from "./actionTypes";

export function* fetchUsers() {
    let result = yield axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data)
    
    yield put(fetchUserAction(result))
}

export const getUser = () => {
    return {
        type : actions.FETCH_USER
    }
}

export const fetchUserAction = (user) => {
    return {
        type : actions.SET_USER,
        payload: user
    }
}