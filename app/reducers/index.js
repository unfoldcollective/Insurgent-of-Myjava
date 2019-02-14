import { combineReducers } from 'redux';
import canvasReducer from './canvasReducer';
import dataReducer from './dataReducer';
import outfitReducer from './outfitReducer';
import accessorizeReducer from './accessorizeReducer';
import finishReducer from './finishReducer';

export default combineReducers({
  canvas: canvasReducer,
  data: dataReducer,
  outfit: outfitReducer,
  accessorize: accessorizeReducer,
  finish: finishReducer
});
