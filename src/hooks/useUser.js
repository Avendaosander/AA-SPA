import { useState } from "react"

export const useUser = () => {
   const [user, setUser] = useState({
      username: '',
      email: '',
      password: ''
   })

   const handleChange = e => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   return { user, handleChange }
}