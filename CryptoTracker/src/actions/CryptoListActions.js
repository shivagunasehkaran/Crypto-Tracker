import { URL } from '../services/Constants';
import { fetchCryptoAPI } from '../services/Services';
import {
  FETCH_CRYPTOLIST_BEGIN,
  FETCH_CRYPTOLIST_FAILURE,
  FETCH_CRYPTOLIST_SUCCESS
} from './ActionConstants';

export const fetchListBegin = () => ({
  type: FETCH_CRYPTOLIST_BEGIN,
});

export const fetchListSuccess = (data) => {
  return {
    type: FETCH_CRYPTOLIST_SUCCESS,
    payload: data,
  };
};

export const fetchListFailure = (error) => ({
  type: FETCH_CRYPTOLIST_FAILURE,
  payload: error,
});

export const fetchCryptoList = () => {
  return function (dispatch) {
    dispatch(fetchListBegin());
    return fetchCryptoAPI(URL.FETCH_URL)
      .then((data) => {
        dispatch(fetchListSuccess(data));
      })
      .catch((err) => {
        //Dispatch error action
        dispatch(fetchListFailure(err));
      });
  };
};
