import {
  ADD_CRYPTOLIST,
  ADD_CRYPTOLIST_INTO_NEWLIST, FETCH_CRYPTOLIST_BEGIN,
  FETCH_CRYPTOLIST_FAILURE,
  FETCH_CRYPTOLIST_SUCCESS,
  FETCH_INDIVIDUAL_CRYPTO_BEGIN,
  FETCH_INDIVIDUAL_CRYPTO_FAILURE, FETCH_INDIVIDUAL_CRYPTO_SUCCESS
} from '../actions/ActionConstants';

const initialState = {
  loading: false,
  error: null,
  cryptoCurrencyDetails: [],
  newCryptoValue: [],
  cryptoPercenrage: null
};

export default function CryptoListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CRYPTOLIST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CRYPTOLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptoCurrencyDetails: action.payload,
      };
    case FETCH_CRYPTOLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'FAILED TO LOAD ....',
      };
    case ADD_CRYPTOLIST:
      return {
        ...state,
        loading: false,
        newCryptoValue: [].concat(...state.newCryptoValue, action.payload),
      };
    case ADD_CRYPTOLIST_INTO_NEWLIST:
      return {
        ...state,
        loading: false,
        cryptoCurrencyDetails: [].concat(
          ...state.cryptoCurrencyDetails,
          ...state.newCryptoValue,
        ),
      };
    case FETCH_INDIVIDUAL_CRYPTO_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_INDIVIDUAL_CRYPTO_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptoPercenrage: action.payload,
      };
    case FETCH_INDIVIDUAL_CRYPTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'FAILED TO LOAD ....',
      };
    default:
      return state;
  }
}
