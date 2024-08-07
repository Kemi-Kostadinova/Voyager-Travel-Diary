import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext";

export default function UnauthorizedGuard() {

    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated
        ? <Navigate to="/" />
        : <Outlet />;
}