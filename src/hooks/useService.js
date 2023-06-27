import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { getService } from "../services/service"
import { useSpa } from "./useSpa"

export const useService = (id) => {
   const { user } = useContext(UserContext)
   const { testimonials } = useSpa()
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [service, setService] = useState([])
   const [testimonialsOfService, setTestimonialsOfService] = useState([])
   
   useEffect(() => {
      const obtenerServicio = async () => {
         try {
            setLoading(true)
            setError(null)
            const service = await getService(user.token, id)
            if(service?.messageError) throw new Error(service)
            setService(service.service)
            setTestimonialsOfService(service.testimonials)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      obtenerServicio()
   }, [testimonials])

   return { service, testimonialsOfService, loading, error }
}