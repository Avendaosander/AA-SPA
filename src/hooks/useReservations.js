import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { getReservations, postReservation, putReservation, deleteReservation } from "../services/reservations"
import { decodeToken } from "react-jwt"
import { addItemToState, udpateItemFromState, deleteItemFromState, deleteItemsFromState } from "../logic/funciones"

export const useReservations = (setLoading, setError) => {
   const { user } = useContext(UserContext)
   const [reservations, setReservations] = useState([])

   const addReservation = async (data) => {
      try {
         setLoading(true)
         setError(null)
         const peticion = await postReservation(data, user.token)
         if(peticion?.messageError) throw new Error(peticion)
         const newList = addItemToState(peticion.reservation, reservations)
         setReservations(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   const updateReservation = async (data, id) => {
      try {
         setLoading(true)
         setError(null)
         const peticion = await putReservation(data, user.token, id)
         if(peticion?.messageError) throw new Error(peticion)
         const newList = udpateItemFromState(peticion.reservation, reservations)
         setReservations(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   const removeReservation = async (id) => {
      try {
         setLoading(true)
         setError(null)
         const peticion = await deleteReservation(user.token, id)
         if(peticion?.messageError) throw new Error(peticion)
         const newList = deleteItemFromState(peticion.reservation, reservations)
         setReservations(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   const removeReservations = async (items) => {
      try {
         setLoading(true)
         setError(null)
         const newList = deleteItemsFromState(items, reservations)
         setReservations(newList)
      } catch (error) {
         setError(error.message)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      const obtenerReservaciones = async () => {
         try {
            setLoading(true)
            setError(null)
            const userID = decodeToken(user.token).id
            const get = await getReservations(user.token, userID)
            setReservations(get.reservations)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      obtenerReservaciones()
   }, [])

   return { reservations, addReservation, updateReservation, removeReservation, removeReservations}
}