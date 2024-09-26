import {useEffect} from "react";
import {useAuth} from "../store/auth.jsx";

export const Logout = () => {
    const {LogoutUser} = useAuth();

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);
    //  
    window.location.href="/login"
}