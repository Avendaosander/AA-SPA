import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { getService } from "../services/service"
// import { SpaContext } from "../context/spaContext"

export const useService = (id) => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const { user } = useContext(UserContext)
   const [service, setServices] = useState([])
   const [testimonialsOfService, setTestimonials] = useState([])

   useEffect(() => {
      const obtenerServicio = async () => {
         try {
            setLoading(true)
            setError(null)
            const service = await getService(user.token, id)
            setServices(service.service)
            setTestimonials(service.testimonials)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      obtenerServicio()
   }, [])

   return { service, testimonialsOfService, loading, error, setServices}
}