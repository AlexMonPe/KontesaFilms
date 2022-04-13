import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";
import { TOKEN_INFO, USER_LOGGED, USER_LOGOUT } from "./typesVar";

const initialState = {
  logged: false,
  tokenInfo: {
    token: "",
    id: "",
    role: "",
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === TOKEN_INFO) {
    return {
      ...state,
      tokenInfo: {
        token: action.payload.token,
        id: action.payload.id,
        role: action.payload.role,
      },
    };
  }
  if (action.type === USER_LOGGED) {
    return {
      ...state,
      logged: true,
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...state,
      tokenInfo: {
        token: "",
        id: "",
        role: "",
      },
      logged: false,
    };
  }
  return state;
};

export default createStore(reducer, devToolsEnhancer());
