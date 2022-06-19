import {combineReducers} from 'redux';
// Imports: Reducers
import {homeReducers} from '../Home';
// Redux: Root Reducer
const rootReducer = combineReducers({
  home: homeReducers,
});
export default rootReducer;
