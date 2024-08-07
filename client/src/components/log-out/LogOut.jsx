import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
                toast.error(`Error on logout: ${err.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                  });
            }
        })();

    return null
}