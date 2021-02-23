import { combineReducers } from 'redux';
import cryptoListReducer from './CryptoListReducer';

const rootReducer = combineReducers({
  cryptoList: cryptoListReducer,
});

export default rootReducer;
