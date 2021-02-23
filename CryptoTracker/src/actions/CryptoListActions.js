import { URL } from '../services/Constants';
import { fetchCryptoAPI } from '../services/Services';
import {
  ADD_CRYPTOLIST,
  ADD_CRYPTOLIST_INTO_NEWLIST, FETCH_CRYPTOLIST_BEGIN,
  FETCH_CRYPTOLIST_FAILURE,
  FETCH_CRYPTOLIST_SUCCESS,
  FETCH_INDIVIDUAL_CRYPTO_BEGIN,
  FETCH_INDIVIDUAL_CRYPTO_FAILURE, FETCH_INDIVIDUAL_CRYPTO_SUCCESS
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
    return fetchCryptoAPI(URL.FETCH_URL2)
      .then((data) => {
        dispatch(fetchListSuccess(data.data));
        dispatch(addCryptoValueIntoNewList(data.data));
      })
      .catch((err) => {
        //Dispatch error action
        dispatch(fetchListFailure(err));
      });
  };
};

export const addCryptoValue = (data) => {
  return {
    type: ADD_CRYPTOLIST,
    payload: data,
  };
};

export const addCryptoValueIntoNewList = (data) => {
  return {
    type: ADD_CRYPTOLIST_INTO_NEWLIST,
    payload: data,
  };
};

export const fetchIndividualCryptoList = (crypto) => {
  const RELATIVE_URL = URL.FETCH_URL + crypto + '/metrics';
  console.log('RELATIVE_URL', RELATIVE_URL);
  return function (dispatch) {
    dispatch(fetchIndividualListBegin());
    return fetchCryptoAPI(RELATIVE_URL)
      .then((data) => {
        dispatch(fetchIndividualListSuccess(data.data));
      })
      .catch((err) => {
        //Dispatch error action
        dispatch(fetchIndividualListFailure(err));
      });
  };
};

export const fetchIndividualListBegin = () => ({
  type: FETCH_INDIVIDUAL_CRYPTO_BEGIN,
});

export const fetchIndividualListSuccess = (data) => {
  return {
    type: FETCH_INDIVIDUAL_CRYPTO_SUCCESS,
    payload: data,
  };
};

export const fetchIndividualListFailure = (error) => ({
  type: FETCH_INDIVIDUAL_CRYPTO_FAILURE,
  payload: error,
});
