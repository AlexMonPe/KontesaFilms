import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";
import {
  CLOSE_LOADING,
  CLOSE_POPUP,
  IS_ADMIN,
  SET_MOVIES,
  SHOW_LOADING,
  SHOW_POPUP,
  TOKEN_INFO,
  USER_LOGGED,
  USER_LOGOUT,
} from "./typesVar";

const initialState = {
  admin: false,
  logged: false,
  tokenInfo: {
    token: "",
    id: "",
    role: "",
  },
  movies: undefined,
  popup: { visible: false, text: "" },
  loading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === SET_MOVIES) {
    return {
      ...state,
      movies: action.payload,
    };
  }
  if (action.type === IS_ADMIN) {
    return {
      ...state,
      admin: true,
    };
  }

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
  if (action.type === SHOW_POPUP) {
    return {
      ...state,
      popup: { visible: true, text: action.payload },
    };
  }

  if (action.type === CLOSE_POPUP) {
    return {
      ...state,
      popup: { visible: false },
    };
  }

  if (action.type === SHOW_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  if(action.type === CLOSE_LOADING){
    return {
      ...state,
      loading: false,
    }
  }
  return state;
};

export default createStore(reducer, devToolsEnhancer());
