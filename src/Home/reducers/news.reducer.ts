/* eslint-disable prettier/prettier */
import {NEWS} from '../actions/ACTION_TYPES';

const NewsInitialState = {
  data: null,
  errors: [],
  loading: false,
};

export const newsReducer = (state = NewsInitialState, action: any = {}) => {
  switch (action.type) {
    case NEWS.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case NEWS.SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        loading: false,
        data: response,
      };
    }
    case NEWS.ERROR: {
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        errors: error,
      };
    }
    default:
      return state;
  }
};