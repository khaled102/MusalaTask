/* eslint-disable prettier/prettier */
import {CATEGORIES} from '../actions/ACTION_TYPES';

const CategoryInitialState = {
  data: null,
  errors: [],
  loading: false,
};

export const categoryReducer = (state = CategoryInitialState, action: any = {}) => {
  switch (action.type) {
    case CATEGORIES.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CATEGORIES.SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        loading: false,
        data: response,
      };
    }
    case CATEGORIES.ERROR: {
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