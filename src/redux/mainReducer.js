import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2173694Reducer from '../features/SignIn2173694/redux/reducers'
import SignIn2173680Reducer from '../features/SignIn2173680/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2173694: SignIn2173694Reducer,
SignIn2173680: SignIn2173680Reducer,

});