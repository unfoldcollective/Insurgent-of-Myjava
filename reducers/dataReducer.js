import { DATA } from '../constants';

const initialState = {
  loaded: false,
  lang: 'sk',
  content: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA.LOADED: {
      return {
        ...state,
        loaded: true,
        content: action.payload
      };
    }

    case DATA.SWITCHED_LANGUAGE: {
      const lang = ['en', 'sk'].includes(action.payload)
        ? action.payload
        : 'sk';

      return {
        ...state,
        lang
      };
    }

    default:
      return state;
  }
};
