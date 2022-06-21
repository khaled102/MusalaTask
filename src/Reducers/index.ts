import {combineReducers} from 'redux';
// Imports: Reducers
import {homeReducers} from '../Home';
import {settingReducers} from '../Setting';
// Redux: Root Reducer
const rootReducer = combineReducers({
  home: homeReducers,
  setting: settingReducers,
});
export default rootReducer;
