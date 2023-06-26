import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider ({ children }) {
   const [user, setUser] = useState(null)
   const [adminMode, setAdminMode] = useState(false)
   
   const toggleAdminMode = () => {
      setAdminMode(!adminMode)
   }

   return (
      <UserContext.Provider value={{
         user,
         setUser,
         adminMode,
         setAdminMode,
         toggleAdminMode
      }}>
         {children}
      </UserContext.Provider>
   )
}