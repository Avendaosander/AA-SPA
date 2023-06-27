import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { VscClose } from 'react-icons/vsc'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import ModalDelete from './ModalDelete'
import { useSpa } from '../hooks/useSpa'
import { decodeToken } from 'react-jwt'

const CarruselTestimonials = ({ testimonials }) => {
   const { user, adminMode } = useContext(UserContext)
   const { removeTestimony } = useSpa()
   const [currentIndex, setCurrentIndex] = useState(0)
   const [deleteItem, setDeleteItem] = useState(null)
   const [modalDelete, setModalDelete] = useState(false)
   const userID = decodeToken(user.token).id

   const hasDeleteCondition = (testimonialID) => {
      return adminMode || userID === testimonialID
   }

   const handleModalDelete = (data = null) => {
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
               className={`p-5 text-2xl bg-emerald-400/50 rounded-lg hover:scale-105 hover:bg-emerald-500/50 hover:text-gray-700 focus:outline-none ${testimonials.length === 1 && 'opacity-0 pointer-events-none'}`}
               onClick={handlePrev}
            >
               <BsChevronCompactLeft/>
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
                        {hasDeleteCondition(testimonial.user._id) && 
                           <button className="absolute top-2 right-2 text-lg text-rose-600" onClick={() => handleModalDelete(testimonial._id)}>
                              <VscClose className=''/>
                           </button>
                        }
                  </div>
               ))}
            </div>
            <button
               className={`p-5 text-2xl bg-emerald-400/50 rounded-lg hover:scale-105 hover:bg-emerald-500/50 hover:text-gray-700 focus:outline-none ${testimonials.length === 1 && 'opacity-0 pointer-events-none'}`}
               onClick={handleNext}
            >
               <BsChevronCompactRight/>
            </button>
         </article>
         {modalDelete && 
            <ModalDelete handleModalDelete={handleModalDelete} id={deleteItem} peticion={removeTestimony}/>
         }
      </>
   )
}

export default CarruselTestimonials
