import { DATA } from '../constants';

export const loadData = data => dispatch => {
  return dispatch({ type: DATA.DATA_LOADED, payload: data });
};
