import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const initialstate = {};

const store = createStore(rootReducer, initialstate, applyMiddleware(thunk)); //reducer, initialstate, middleware

export default store;
