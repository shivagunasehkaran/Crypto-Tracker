import { combineReducers } from 'redux';
import CryptoListReducer from './CryptoListReducer';

const rootReducer = combineReducers({
  CryptoListReducer,
});

export default rootReducer;
