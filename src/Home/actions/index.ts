import {createAction} from '../../Util/action.heplers';
import {CATEGORIES} from './ACTION_TYPES';

export const category = createAction(CATEGORIES.ACTION);
export const categoryPending = createAction(CATEGORIES.PENDING);
export const categorySuccess = createAction(CATEGORIES.SUCCESS, 'response');
export const categoryError = createAction(CATEGORIES.ERROR, 'error');
