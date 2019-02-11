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
            ...state.insurgent.weapon,
            model: action.payload
          }
        }
      };
    }

    case CANVAS.ACCESSORY_ADDED: {
      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          weapon: {
            ...state.insurgent.weapon,
            extras: [...state.insurgent.weapon.extras, action.payload]
          }
        }
      };
    }

    case CANVAS.ACCESSORY_UPDATED: {
      const extras = state.insurgent.weapon.extras.map((extra, index) => {
        if (index !== action.payload.accessory) return extra;

        return { ...extra, ...action.payload.data };
      });
      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          weapon: {
            ...state.insurgent.weapon,
            extras
          }
        }
      };
    }

    case CANVAS.ACCESSORY_REORDERED: {
      const extras = state.insurgent.weapon.extras.map((extra, index) => {
        if (index !== action.payload.accessory) return extra;

        return { ...extra, z: action.payload.z };
      });

      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          weapon: {
            ...state.insurgent.weapon,
            extras
          }
        }
      };
    }

    case CANVAS.ACCESSORY_FLIPPED: {
      const extras = state.insurgent.weapon.extras.map((extra, index) => {
        if (index !== action.payload) return extra;

        return { ...extra, flipped: !extra.flipped };
      });

      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          weapon: {
            ...state.insurgent.weapon,
            extras
          }
        }
      };
    }

    case CANVAS.ACCESSORY_REMOVED: {
      const extras = state.insurgent.weapon.extras.filter(
        (extra, index) => index === action.payload
      );

      return {
        ...state,
        insurgent: {
          ...state.insurgent,
          weapon: {
            ...state.insurgent.weapon,
            extras
          }
        }
      };
    }

    default:
      return state;
  }
};
