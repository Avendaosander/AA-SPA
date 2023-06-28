import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { decodeToken } from 'react-jwt'
import { useSpa } from '../hooks/useSpa'
import ErrorModal from './ErrorModal'

function FormTestimony({ data, showFormTestimony }) {
   const { user } = useContext(UserContext)
   const { addTestimony } = useSpa()
   const userID = decodeToken(user.token).id
   const [error, setError] = useState('')

   const [testimony, setTesimony] = useState({
      user: userID,
      service: data._id,
      descripcion: ''
   })

   const handleChange = e => {
      setTesimony({
         ...testimony,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      if (testimony.descripcion.trim() === '')
         return setError('El campo descripcion no puede estar vacio')
      addTestimony(testimony)
      showFormTestimony()
   }

   return (
      <>
         <form className='text-left text-lg ring-2 ring-emerald-600 p-5 rounded-xl grid grid-cols-2 justify-center gap-10'>
            <fieldset className='flex flex-col gap-2 col-span-2'>
               <legend className='text-lg mb-5 text-center'>
                  <strong>@{user.username}</strong> sobre 
                  <span className='font-medium'> {data.service?.titulo || data.titulo}</span>
               </legend>
               <label
                  htmlFor='descripcion'
                  className='font-medium'
               >
                  Descripcion
               </label>
               <textarea
                  name='descripcion'
                  id='descripcion'
                  value={testimony.descripcion}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               ></textarea>
            </fieldset>
         </form>
         <div className='flex justify-evenly mt-5'>
            <button
               className='bg-emerald-600 text-emerald-100 px-6 rounded-md col-span-1'
               onClick={handleSubmit}
            >
               Crear Testimonio
            </button>
            <button
               onClick={showFormTestimony}
               className='bg-rose-500 text-emerald-100 px-6 rounded-md disabled:bg-black/50 col-span-1'
            >
               Cancelar
            </button>
         </div>
         {!!error && 
            <ErrorModal error={error} setError={setError}/>
         }
      </>
   )
}

export default FormTestimony
