import { DATA } from '../constants';

export const loadData = data => dispatch => {
  return dispatch({ type: DATA.LOADED, payload: data });
};

export const switchLanguage = lang => dispatch => {
  return dispatch({ type: DATA.SWITCHED_LANGUAGE, payload: lang });
};
