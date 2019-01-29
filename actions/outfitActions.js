import { OUTFIT } from '../constants';

export const changeOutfitFilter = filter => dispatch => {
  return dispatch({ type: OUTFIT.FILTER_CHANGED, payload: filter });
};
