import {combineReducers} from 'redux';
import {themeModeReducer} from './themMode.reducer';

export const settingReducers = combineReducers({
  themeModeReducer: themeModeReducer,
});
