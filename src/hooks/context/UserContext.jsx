import { createContext, useState } from "react";


// Global State bna rhy a.
export const UserContext = createContext();


// Provider jo k components ko data provide kry ga
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "khan",
        age: 21,
        email: "khan@gmail.com"
    });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}