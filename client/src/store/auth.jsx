import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [service,setService] = useState("");
    const AuthorizationToken = `Bearer ${token}`;
    const storeToken = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    }

    let isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    };
    
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method: "GET",
                headers:{
                    Authorization: AuthorizationToken
                }
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.payload.userData);
                setIsLoading(false);
            }else {
                setIsLoading(false);
            }
        }catch (error) {
            console.error("Error fetching user data!")
        }
    }

    
    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service",{
                method: "GET",
            });
            if(response.ok){
                const data = await response.json();
                setService(data.payload.data);
            }
        }catch (error) {
            console.log(`Services Front End Error: ${error}`);
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{isLoggedIn,storeToken,LogoutUser,user,service,AuthorizationToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}