import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { SpaContext } from '../context/spaContext'
import { VscClose } from 'react-icons/vsc'
import ModalDelete from './ModalDelete'

const CarruselTestimonials = ({ testimonials }) => {
   const { user } = useContext(UserContext)
   const { removeTestimony } = useContext(SpaContext)
   const [currentIndex, setCurrentIndex] = useState(0)
   const [deleteItem, setDeleteItem] = useState(null)
   const [modalDelete, setModalDelete] = useState(false)

   const handleModalDelete = (data = null) => {
      console.log(data)
      if (data) setDeleteItem(data)
      setModalDelete(!modalDelete)
   }
   

   const handlePrev = () => {
      setCurrentIndex(prevIndex =>
         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      )
   }

   const handleNext = () => {
      setCurrentIndex(prevIndex =>
         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
   }

   return (
      <>
         <article className='w-[600px] h-[200px] mx-auto flex justify-between items-center gap-10'>
            <button
               className='text-gray-500 hover:text-gray-700 focus:outline-none'
               onClick={handlePrev}
            >
               Prev
            </button>
            <div className='relative flex flex-col gap-5 py-5 px-10 max-w-[400px] text-left bg-emerald-200/50 ring-1 ring-emerald-600 rounded-r-xl rounded-bl-xl'>
               {testimonials.map((testimonial, index) => (
                  <div
                     key={testimonial._id}
                     className={`w-full h-full transition-opacity duration-300 ${
                        index === currentIndex ? 'block' : 'hidden'
                     }`}
                  >
                        <p className="text-lg">
                           <strong>@{testimonial.user.username}</strong> sobre
                           <span className='font-medium'> {testimonial.service.titulo}</span>
                        </p>
                        <p className='font-medium'>{testimonial.descripcion}</p>
                        {user.rol === 'Admin' && 
                           <button className="absolute top-2 right-2" onClick={() => handleModalDelete(testimonial._id)}>
                              <VscClose className='text-lg'/>
                           </button>
                        }
                  </div>
               ))}
            </div>
            <button
               className='text-gray-500 hover:text-gray-700 focus:outline-none'
               onClick={handleNext}
            >
               Next
            </button>
         </article>
         {modalDelete && 
            <ModalDelete handleModalDelete={handleModalDelete} id={deleteItem} peticion={removeTestimony}/>
         }
      </>
   )
}

export default CarruselTestimonials
