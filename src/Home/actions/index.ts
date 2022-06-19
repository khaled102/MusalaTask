import {createAction} from '../../Util/action.heplers';
import {NEWS} from './ACTION_TYPES';

export const news = createAction(NEWS.ACTION);
export const newsPending = createAction(NEWS.PENDING);
export const newsSuccess = createAction(NEWS.SUCCESS, 'response');
export const newsError = createAction(NEWS.ERROR, 'error');
