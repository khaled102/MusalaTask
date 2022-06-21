/* eslint-disable prettier/prettier */
import {THEMEMODE} from '../actions/ACTION_TYPES';

const ThemeModeInitialState = {
  data: null,
  errors: [],
  loading: false,
};

export const themeModeReducer = (state = ThemeModeInitialState, action: any = {}) => {
  switch (action.type) {
    case THEMEMODE.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case THEMEMODE.SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        loading: false,
        data: response,
      };
    }
    case THEMEMODE.ERROR: {
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