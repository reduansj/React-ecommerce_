import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        ...state,
        logged: false,
      };
    case types.initialize:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
