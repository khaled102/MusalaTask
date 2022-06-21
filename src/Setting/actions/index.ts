import {createAction} from '../../Util/action.heplers';
import {THEMEMODE} from './ACTION_TYPES';

export const themeMode = createAction(THEMEMODE.ACTION, 'data');
export const themeModePending = createAction(THEMEMODE.PENDING);
export const themeModeSuccess = createAction(THEMEMODE.SUCCESS, 'response');
export const themeModeError = createAction(THEMEMODE.ERROR, 'error');
