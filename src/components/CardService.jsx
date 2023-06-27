import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { BsPencilSquare, BsTrash3Fill } from 'react-icons/bs'
import { truncatedText } from '../logic/funciones'

function CardService({ data, handleModalEdit, handleModalDelete }) {
   const { adminMode } = useContext(UserContext)
   return (
      <article className='flex flex-col gap-5 p-5 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl max-w-[300px] w-full  mx-auto'>
         <h3 className='font-bold text-lg'>{data.titulo}</h3>
         <p className='font-medium text-justify'>{truncatedText(data.descripcion)}</p>
         <div className='flex justify-around'>
            <strong className='text-emerald-950/70'>${data.precio}</strong>
            <strong className='text-emerald-950/70'>{data.duracion} min</strong>
         </div>
         
         <div className='flex justify-evenly'>
            {adminMode && 
               <button
                  className='text-emerald-800 text-2xl px-6 rounded-md'
                  onClick={() => handleModalEdit(data)}
               >
                  <BsPencilSquare/>
               </button>
            }
            <Link
               to={`/service/${data._id}`}
               className='bg-sky-700 text-emerald-100 text-lg px-6 rounded-md m-auto'
            >
               Ver más
            </Link>
            {adminMode && 
               <button
                  className='text-rose-600 text-2xl px-6 rounded-md'
                  onClick={() => handleModalDelete(data._id)}
               >
                  <BsTrash3Fill/>
               </button>
            }
         </div>
      </article>
   )
}

export default CardService
