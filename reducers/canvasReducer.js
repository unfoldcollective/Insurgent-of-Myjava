import { CANVAS } from '../constants';

const initialState = {
  step: 0,
  totalSteps: 5,
  helpMode: false,
  insurgent: {
    character: null,
    clothes: [],
    weapon: {
      model: null,
      extras: []
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CANVAS.STEP_ADVANCED: {
      const step = state.step + 1;
      return {
        ...state,
        step: step > state.totalSteps ? state.totalSteps : step
      };
    }
    case CANVAS.STEP_RETREATED: {
      const step = state.step - 1;
      return {
        ...state,
        step: step < 0 ? 0 : step
      };
    }
    case CANVAS.STEP_CHANGED: {
      const step = action.payload;
      return {
        ...state,
        step: step <= state.totalSteps && step >= 0 ? step : 0
      };
    }
    case CANVAS.RESET: {
      return initialState;
    }
    case CANVAS.HELP_ACTIVATED: {
      return {
        ...state,
        helpMode: true
      };
    }
    case CANVAS.HELP_DEACTIVATED: {
      return {
        ...state,
        helpMode: false
      };
    }

    default:
      return state;
  }
};
