import { OUTFIT } from '../constants';

const initialState = {
  isDragging: false,
  itemDragged: null,
  filter: 'head'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OUTFIT.FILTER_CHANGED: {
      return {
        ...state,
        filter: action.payload
      };
    }

    case OUTFIT.ITEM_DRAGGED: {
      return {
        ...state,
        isDragging: true,
        itemDragged: action.payload
      };
    }
    case OUTFIT.ITEM_DROPPED: {
      return {
        ...state,
        isDragging: false
      };
    }
    default:
      return state;
  }
};
