import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { useReducer } from "react";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false,
  };
  const { authState, dispatch } = useReducer(authReducer, initialState);

  const login = (name = "") => {
    const user = {
      id: 123456,
      name: name,
    };

    dispatch({
      type: types.login,
      payload: user,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
