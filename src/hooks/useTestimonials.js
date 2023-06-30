import { useContext, useEffect, useState } from "react"
import { decodeToken } from "react-jwt"
import { UserContext } from "../context/userContext"
import { postTestimony, deleteTestimony } from "../services/testimonials"
import { addItemToState, deleteItemFromState, deleteItemsFromState } from "../logic/funciones"
import { obtenerHome } from "../services/home"

export const useTestimonials = (setLoading,setError) => {
   const { user } = useContext(UserContext)
   const [testimonials, setTestimonials] = useState([])

   const addTestimony = async (data) => {
      try {
         setLoading(true)
         setError(null)
         const peticion = await postTestimony(data, user.token)
         if(peticion?.messageError) throw new Error(peticion.messageError)
         const newList = addItemToState(peticion.testimony, testimonials)
         setTestimonials(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   const removeTestimony = async (id) => {
      try {
         setLoading(true)
         setError(null)
         const peticion = await deleteTestimony(user.token, id)
         if(peticion?.messageError) throw new Error(peticion.messageError)
         const newList = deleteItemFromState(peticion.testimony, testimonials)
         setTestimonials(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }
   
   const removeTestimonials = async (items) => {
      try {
         setLoading(true)
         setError(null)
         const newList = deleteItemsFromState(items, testimonials)
         setTestimonials(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      const obtenerTestimonios = async () => {
         try {
            setLoading(true)
            setError(null)
            const userID = decodeToken(user.token).id
            const get = await obtenerHome(user.token, userID)
            if(get?.messageError) throw new Error(get.messageError)
            setTestimonials(get.testimonials)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      obtenerTestimonios()
   }, [])

   return { testimonials, addTestimony, removeTestimony, removeTestimonials}
}