import { useNavigate } from "react-router-dom";

import { useLogout } from "../../hooks/useAuth"


export default function LogOut() {
    const logout = useLogout();
    const navigate = useNavigate();

        (async () => {
            try {
                await logout();
                navigate('/');
            } catch (err) {
                console.log(err.message);
            }
        })();

    return null
}