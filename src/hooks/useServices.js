import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { obtenerHome } from "../services/home"
import { deleteService, postService, putService } from "../services/services"
import { addItemToState, udpateItemFromState, deleteItemFromState } from "../logic/funciones"
import { decodeToken } from "react-jwt"
import { useReservations } from "./useReservations"
import { useTestimonials } from "./useTestimonials"

export const useServices = (setLoading, setError) => {
   const { user } = useContext(UserContext)
   const { removeReservations } = useReservations(setLoading, setError)
   const { removeTestimonials } = useTestimonials(setLoading, setError)
   const [services, setServices] = useState([])
      
   const addService = async (data) => {
      try {
         setLoading(true)
         setError(null)
         const userID = decodeToken(user.token).id
         const peticion = await postService(data, user.token, userID)
         if(peticion?.messageError) throw new Error(peticion.messageError)
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
         if(peticion?.messageError) throw new Error(peticion.messageError)
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
         if(peticion?.messageError) throw new Error(peticion.messageError)
         const newList = deleteItemFromState(peticion.service, services)
         removeReservations(peticion.deletedReservations)
         removeTestimonials(peticion.deletedTestimonials)
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
            if(getHome?.messageError) throw new Error(getHome.messageError)
            setServices(getHome.services)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      getHome()
   }, [user])

   return { services, addService, updateService, removeService}
}