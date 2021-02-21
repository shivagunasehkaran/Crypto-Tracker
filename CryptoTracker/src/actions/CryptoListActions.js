import {
  FETCH_CRYPTOLIST_BEGIN,
  FETCH_CRYPTOLIST_FAILURE,
  FETCH_CRYPTOLIST_SUCCESS,
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
  payload: {error},
});

export function fetchList() {
  return (dispatch, getState) => {
    //redux passes dispatch & getState as args into thunk functions
    dispatch(fetchListBegin());
    return [];
  };
}
