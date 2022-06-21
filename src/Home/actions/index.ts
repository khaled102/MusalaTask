import {createAction} from '../../Util/action.heplers';
import {NEWS, SEARCHING} from './ACTION_TYPES';

export const news = createAction(NEWS.ACTION);
export const newsPending = createAction(NEWS.PENDING);
export const newsSuccess = createAction(NEWS.SUCCESS, 'response');
export const newsError = createAction(NEWS.ERROR, 'error');

export const searching = createAction(SEARCHING.ACTION, 'data');
export const searchingPending = createAction(SEARCHING.PENDING);
export const searchingSuccess = createAction(SEARCHING.SUCCESS, 'response');
export const searchingError = createAction(SEARCHING.ERROR, 'error');
