import { OUTFIT } from '../constants';

export const changeOutfitFilter = filter => dispatch => {
  return dispatch({ type: OUTFIT.FILTER_CHANGED, payload: filter });
};

export const setDragOutfit = item => dispatch => {
  return dispatch({ type: OUTFIT.ITEM_DRAGGED, payload: item });
};

export const dropOutfit = () => dispatch => {
  return dispatch({ type: OUTFIT.ITEM_DROPPED });
};
