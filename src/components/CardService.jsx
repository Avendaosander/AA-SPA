import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'

function CardService({ data }) {
   const { adminMode } = useContext(UserContext)
   return (
      <article className='flex flex-col gap-3 p-3 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl max-w-[300px] w-full  mx-auto'>
         <h3 className='font-bold text-lg'>{data.titulo}</h3>
         <p className='font-medium overflow-hidden'>{data.descripcion}</p>
         <div className='flex justify-around'>
            <strong className='text-emerald-950/70'>${data.precio}</strong>
            <strong className='text-emerald-950/70'>{data.duracion} min</strong>
         </div>
            <Link
               to={`/service/${data._id}`}
               className='bg-sky-700 text-emerald-100 text-lg px-6 rounded-md m-auto'
            >
               Ver más
            </Link>
         {adminMode && 
            <div className='flex justify-around'>
               <button
                  className='bg-blue-600 text-emerald-100 text-lg px-6 rounded-md'
                  // onClick={showModalEdit}
               >
                  Modificar
               </button>
               <button
                  className='bg-rose-600 text-emerald-100 text-lg px-6 rounded-md'
                  // onClick={showModalEdit}
               >
                  Eliminar
               </button>
            </div>
         }
      </article>
   )
}

export default CardService
