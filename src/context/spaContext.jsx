import { createContext, useState } from "react";
import { useReservations } from '../hooks/useReservations'
import { useServices } from '../hooks/useServices'
import { useTestimonials } from "../hooks/useTestimonials";

export const SpaContext = createContext()

export function SpaProvider({ children }) {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const { reservations, addReservation, updateReservation, removeReservation } = useReservations(setLoading, setError)
   const { services, addService, updateService, removeService } = useServices(setLoading, setError)
   const { testimonials, addTestimony, removeTestimony } = useTestimonials(setLoading, setError)

   return (
      <SpaContext.Provider value={{
         loading,
         error,
         reservations,
         addReservation,
         updateReservation,
         removeReservation,
         services,
         addService,
         updateService,
         removeService,
         testimonials,
         addTestimony,
         removeTestimony
      }}>
         {children}
      </SpaContext.Provider>
   )
}
