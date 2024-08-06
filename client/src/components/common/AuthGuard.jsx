import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

export default function AuthGuard() {

    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/log-in" />;
}