import { createContext, useState } from "react";

export const userDataContext = createContext()

export const UserDataProvider = ({children}) => {
    const value = sessionStorage.getItem('userData');
    const [userData, setUserData] = useState(value? JSON.parse(value) : {isLogged : false});

    return(
        <userDataContext.Provider value = {{userData, setUserData}}>
            {children}
        </userDataContext.Provider>
    )
}