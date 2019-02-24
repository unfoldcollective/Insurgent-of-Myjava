import { FINISH } from '../constants';

const initialState = {
  step: 0,
  name: null,
  email: null,
  bg: null,
  done: false,
  error: null,
  saving: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FINISH.STEP_ADVANCED: {
      return {
        ...state,
        step: state.step + 1
      };
    }

    case FINISH.NAME_SET: {
      return {
        ...state,
        name: action.payload
      };
    }

    case FINISH.EMAIL_SET: {
      return {
        ...state,
        email: action.payload
      };
    }

    case FINISH.FINISH_DONE: {
      return {
        ...state,
        done: true
      };
    }

    case FINISH.FINISH_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }

    case FINISH.SAVING_REQUESTED: {
      return {
        ...state,
        saving: true
      };
    }

    case FINISH.BG_SET: {
      return {
        ...state,
        bg: action.payload
      };
    }

    default:
      return state;
  }
};
