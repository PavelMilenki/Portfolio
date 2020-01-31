import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {ContactFormReducer} from "./contactFormReducer";


const reducers = combineReducers({
    contactForm: ContactFormReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store
window._store_ = store;