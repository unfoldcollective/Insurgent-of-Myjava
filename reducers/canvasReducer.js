import { CANVAS } from '../constants';

const initialState = {
  step: 0,
  totalSteps: 5,
  helpMode: false,
  insurgent: {
    character: 0,
    clothes: {},
    weapon: {
      model: 0,
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
    case CANVAS.CHARACTER_SELECTED: {
      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          character: action.payload
        }
      };
    }

    case CANVAS.CHARACTER_DRESSED: {
      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          clothes: {
            ...state.insurgent.clothes,
            [action.payload.slot]: action.payload.item
          }
        }
      };
    }

    case CANVAS.WEAPON_SELECTED: {
      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          weapon: {
            ...state.weapon,
            model: action.payload
          }
        }
      };
    }

    default:
      return state;
  }
};
