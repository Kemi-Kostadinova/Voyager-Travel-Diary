import { useContext } from "react";

import { login, register } from "../api/authAPI"
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const {password: _password, ...authData} = await login(email, password);

        changeAuthState(authData);

        return result;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, username, password) => {
        const {password: _password, ...authData} = await register(email, username, password);

        changeAuthState(authData);

        return result;
    }

    return registerHandler
}