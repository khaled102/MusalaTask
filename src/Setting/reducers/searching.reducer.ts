import {SEARCHING} from '../actions/ACTION_TYPES';

const SearchingInitialState = {
  data: null,
  errors: [],
  loading: false,
};

export const searchingReducer = (state = SearchingInitialState, action: any = {}) => {
  switch (action.type) {
    case SEARCHING.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCHING.SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        loading: false,
        data: response,
      };
    }
    case SEARCHING.ERROR: {
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