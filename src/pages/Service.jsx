import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useService } from '../hooks/useService'
import { useSpa } from '../hooks/useSpa'
import Header from '../components/Header'
import FormReservation from '../components/FormReservation'
import FormTestimony from '../components/FormTestimony'
import CarruselTestimonials from '../components/CarruselTestimonials'
import Loader from '../components/Loader'

function Service() {
   const { serviceID } = useParams()
   const { addReservation } = useSpa()
   const { service, testimonialsOfService, loading } = useService(serviceID)
   const [formReservation, setFormReservation] = useState(false)
   const [formTestimony, setFormTestimony] = useState(false)
   
   const showFormReservation = () => {
      setFormReservation(!formReservation)
   }

   const showFormTestimony = () => {
      setFormTestimony(!formTestimony)
   }

   const updateReservations = async (data) => {
      addReservation(data)
   }
   
   return (
      <>
         <Header texto={service.titulo} />
         <main className='flex flex-col items-center gap-5'>
            {loading ? (
               <Loader/>
            ) : (
               <>
                  <section className='grid grid-flow-col auto-cols-fr justify-around container pt-5'>
                     <article className='flex flex-col items-center gap-5'>
                        <h2 className='font-bold text-xl'>Descripción</h2>
                        <p className='text-lg'>{service.descripcion}</p>
                     </article>
                     <article className='flex flex-col items-center gap-3'>
                        <h2 className='font-bold text-xl'>Duración</h2>
                        <p className='text-lg'>{service.duracion} min</p>
                        <h2 className='font-bold text-xl'>Precio</h2>
                        <p className='text-lg'>${service.precio}</p>
                     </article>
                  </section>
                  <section className='flex flex-col items-center gap-6 w-full bg-emerald-300 p-6'>
                     <button
                        disabled={formReservation}
                        onClick={showFormReservation}
                        className='bg-emerald-600 text-emerald-100 text-lg px-6 rounded-md disabled:bg-black/50'
                     >
                        Agendar Cita
                     </button>
                     {formReservation && (
                        <article>
                           <FormReservation
                              data={service}
                              showFormReservation={showFormReservation}
                              peticion={updateReservations}
                           />
                        </article>
                     )}
                  </section>
                  <h2 className='font-bold text-xl'>
                     Testimonios sobre este servicio
                  </h2>
                  <section className='flex justify-center gap-5 mx-10'>
                     {
                        testimonialsOfService.length === 0 ? (
                           <h2 className='font-medium text-lg'>
                              No hay testimonios aun
                           </h2>
                        ) : (
                           <CarruselTestimonials testimonials={testimonialsOfService}/>
                        )
                     }
                  </section>
                  <section className='flex flex-col items-center gap-6 w-full bg-emerald-300 p-6'>
                     <button
                        disabled={formTestimony}
                        onClick={showFormTestimony}
                        className='bg-emerald-600 text-emerald-100 text-lg px-6 rounded-md disabled:bg-black/50'
                     >
                        Agregar Testimonio
                     </button>
                     {formTestimony && (
                        <article>
                           <FormTestimony
                              data={service}
                              showFormTestimony={showFormTestimony}
                           />
                        </article>
                     )}
                  </section>
               </>
            )}
         </main>
      </>
   )
}

export default Service
