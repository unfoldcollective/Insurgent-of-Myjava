import { DATA } from '../constants';

const initialState = {
  loaded: false,
  language: 'en',
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA.DATA_LOADED: {
      return {
        ...state,
        loaded: true,
        data: action.payload
      };
    }

    default:
      return state;
  }
};
