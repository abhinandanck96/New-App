import { applyMiddleware, createStore } from "redux";
import reducer from "../reducer/reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const store = createStore(reducer,initialState,applyMiddleware(thunk))
    return store;
}  