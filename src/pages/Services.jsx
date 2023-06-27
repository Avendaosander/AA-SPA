import Header from '../components/Header'
import CardService from '../components/CardService'
import {
   BsCalendar3Week,
   BsClock,
   BsEnvelope,
   BsFacebook,
   BsInstagram,
   BsPhone,
   BsPinMapFill,
   BsWhatsapp
} from 'react-icons/bs'
import { useSpa } from '../hooks/useSpa'
import CarruselTestimonials from '../components/CarruselTestimonials'
import FormService from '../components/FormService'
import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import ModalEdit from '../components/ModalEdit'
import ModalDelete from '../components/ModalDelete'


function Services() {
   const { user, adminMode } = useContext(UserContext)
   const { services, testimonials, addService, updateService, removeService, loading } = useSpa()
   const [formService, setFormService] = useState(false)
   const [modalEdit, setModalEdit] = useState(false)
   const [modalDelete, setModalDelete] = useState(false)
   const [itemUpdate, setItemUpdate] = useState(null)
   const [itemDelete, setItemDelete] = useState(null)

   const handleModalDelete = (data = null) => {
      if (data) setItemDelete(data)
      setModalDelete(!modalDelete)
   }
   
   const handleModalEdit = (data = null) => {
      if (data) setItemUpdate(data)
      setModalEdit(!modalEdit)
   }

   const showFormService = () => {
      setFormService(!formService)
   }
   return (
      <>
         <Header
            texto={`¡Bienvenido ${user.username} al Spa de Relajación AA SPA!`}
         />
         <main className='flex flex-col gap-5 py-5 items-center'>
            <h2 className='font-bold text-2xl'>Servicios</h2>
            <section className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] container w-full gap-5'>
               {loading ? (
                  <h2 className='font-medium text-lg'>
                     Loading
                  </h2>
               ) : (
                  services.length === 0 ? (
                     <h2 className='font-medium text-lg'>
                        No hay servicios disponibles
                     </h2>
                  ) : (
                     services.map(service => (
                        <CardService
                           key={service._id}
                           data={service}
                           handleModalEdit={handleModalEdit}
                           handleModalDelete={handleModalDelete}
                        />
                     ))
                  )
               )}
            </section>
               {adminMode && 
                  <section className='flex flex-col items-center gap-6 w-full bg-emerald-300 p-6'>
                     <button
                        disabled={formService}
                        onClick={showFormService}
                        className='bg-emerald-600 text-emerald-100 text-lg px-6 rounded-md disabled:bg-black/50'
                     >
                        Agregar servicio
                     </button>
                     {formService && (
                        <article>
                           <FormService peticion={addService} showFormService={showFormService}/>
                        </article>
                     )}
                  </section>
               }
            <section className='bg-emerald-200 w-full p-5 flex justify-around items-center text-left gap-5'>
               <article className='flex flex-col text-lg gap-2'>
                  <h2 className='font-bold text-2xl text-center'>Horario:</h2>
                  <div className='flex items-center gap-2'>
                     <BsCalendar3Week />
                     <p>De Lunes a Sabados</p>
                  </div>
                  <div className='flex items-center gap-2'>
                     <BsClock />
                     <p>De 8am a 6pm</p>
                  </div>
               </article>
               <article className='flex flex-col text-lg items-center gap-2'>
                  <h2 className='font-bold text-2xl'>Ubicanos en:</h2>
                  <div className='flex items-center gap-2'>
                     <BsPinMapFill />
                     <p>San Rafael de Carvajal, sector el Amparo</p>
                  </div>
                  <div className='flex gap-4'>
                     <BsFacebook className='hover:scale-110 text-xl' />
                     <BsInstagram className='hover:scale-110 text-xl' />
                     <BsWhatsapp className='hover:scale-110 text-xl' />
                  </div>
               </article>
               <article className='flex flex-col text-lg items-center gap-2'>
                  <h2 className='font-bold text-2xl'>Contacto:</h2>
                  <div className='flex items-center gap-2'>
                     <BsEnvelope />
                     <p>aaspa@gmail.com</p>
                  </div>
                  <div className='flex items-center gap-2'>
                     <BsPhone />
                     <p>+58 426-5121891</p>
                  </div>
               </article>
            </section>
            <h2 className='font-bold text-2xl'>
               Algunos testimonios de nuestros clientes
            </h2>
            <section className='flex justify-center gap-5 mx-10'>
               {loading ? (
                  <h2 className='font-medium text-lg'>
                     Loading
                  </h2>
               ) : (
                  testimonials.length === 0 ? (
                     <h2 className='font-medium text-lg'>
                        No hay testimonios aun
                     </h2>
                  ) : (
                     <CarruselTestimonials testimonials={testimonials}/>
                  )
               )}
            </section>
            {modalEdit && 
               <ModalEdit>
                  <FormService data={itemUpdate} showFormService={handleModalEdit} peticion={updateService}/>
               </ModalEdit>
            }
            {modalDelete && 
               <ModalDelete handleModalDelete={handleModalDelete} id={itemDelete} peticion={removeService}/>
            }
         </main>
      </>
   )
}

export default Services
