import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import Reducer from "./Reducers/Reducers";


const configureStore = () => {
    if (__DEV__) {
        return createStore(Reducer,  composeWithDevTools())
    }
    return createStore(Reducer);
}
export default configureStore;