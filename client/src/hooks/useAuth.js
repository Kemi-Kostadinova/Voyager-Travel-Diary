import { useContext } from "react";

import { login, register, logout } from "../api/authAPI"
import { AuthContext } from "../contexts/authContext";

export function useLogin() {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _password, ...authData } = await login(email, password);

        localStorage.setItem("accessToken", authData.accessToken);
        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
}

export function useRegister() {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, username, password) => {
        const { password: _password, ...authData } = await register(email, username, password);

        localStorage.setItem("accessToken", authData.accessToken);
        changeAuthState(authData);

        return authData;
    }

    return registerHandler
}

export function useLogout() {
    const { changeAuthState } = useContext(AuthContext);

    const logoutHandler = async () => {
        const result = await logout();

        localStorage.removeItem("accessToken");
        changeAuthState({});

        return result;
    }

    return logoutHandler
}