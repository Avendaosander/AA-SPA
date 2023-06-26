import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { obtenerHome } from "../services/home"
import { deleteService, postService, putService } from "../services/services"
import { addItemToState, udpateItemFromState, deleteItemFromState } from "../logic/funciones"
import { decodeToken } from "react-jwt"

export const useServices = (setLoading, setError) => {
   const { user } = useContext(UserContext)
   const [services, setServices] = useState([])
   const [testimonials, setTestimonials] = useState([])
      
   const addService = async (data) => {
      try {
         setLoading(true)
         setError(null)
         const userID = decodeToken(user.token).id
         const peticion = await postService(data, user.token, userID)
         if(peticion?.messageError) throw new Error(peticion)
         const newList = addItemToState(peticion.service, services)
         setServices(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   const updateService = async (data, id) => {
      try {
         setLoading(true)
         setError(null)
         const userID = decodeToken(user.token).id
         const peticion = await putService(data, user.token, id, userID)
         if(peticion?.messageError) throw new Error(peticion)
         const newList = udpateItemFromState(peticion.service, services)
         setServices(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   const removeService = async (id) => {
      try {
         setLoading(true)
         setError(null)
         const userID = decodeToken(user.token).id
         const peticion = await deleteService(user.token, id, userID)
         if(peticion?.messageError) throw new Error(peticion)
         const newList = deleteItemFromState(peticion.service, services)
         setServices(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      const getHome = async () => {
         try {
            setLoading(true)
            setError(null)
            const getHome = await obtenerHome(user.token)
            setServices(getHome.services)
            setTestimonials(getHome.testimonials)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      getHome()
   }, [user])

   return { services, testimonials, addService, updateService, removeService}
}