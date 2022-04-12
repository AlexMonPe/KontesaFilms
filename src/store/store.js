import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

const initialState = {};

const reducer = (state = initialState, action) => {
    
    return state;
  };
  
  export default createStore(reducer, devToolsEnhancer());
  