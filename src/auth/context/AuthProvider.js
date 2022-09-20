import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useReducer } from "react";
import { getUser, logInUser, logOutUser } from "../../Api/users";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";

import bcrypt from "bcryptjs";

import { authReducer } from "./AuthReducer";

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["user"], getUser, {
    onSuccess: (data) => dispatch({ type: types.initialize, payload: data }),
  });

  const logOut = useMutation(logOutUser, {
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });

  const saveUser = useMutation(logInUser);

  const [authState, dispatch] = useReducer(authReducer, { logged: false });

  const login = (userData) => {
    const name = userData.email.split("@")[0];
    const hashedPassword = bcrypt.hashSync(
      userData.password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );

    const user = { id: 1, name };

    const action = {
      type: types.login,
      payload: user,
    };

    saveUser.mutate(user);
    dispatch(action);
  };

  const logout = () => {
    logOut.mutate();

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
