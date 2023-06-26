import { useState } from 'react'

function FormService({  data, showFormService, peticion }) {
   const [service, setService] = useState({
      titulo: data?.titulo || '',
      descripcion: data?.descripcion || '',
      duracion: data?.duracion || 0,
      precio: data?.precio || 0,
      descuento: data?.descuento || 0
   })

   const handleChange = e => {
      setService({
         ...service,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      showFormService()
      if(data) return peticion(service, data._id)
      peticion(service)
   }

   return (
      <>
         <form className='text-left text-lg ring-2 ring-emerald-600 p-5 rounded-xl grid grid-cols-2 justify-center gap-10'>
            <div className='flex flex-col justify-center'>
               <label
                  htmlFor='titulo'
                  className='font-medium'
               >
                  Titulo
               </label>
               <input
                  type='text'
                  name='titulo'
                  id='titulo'
                  value={service.titulo}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
            </div>
            <div className='flex flex-col justify-center'>
               <label
                  htmlFor='descripcion'
                  className='font-medium'
               >
                  Descripcion
               </label>
               <input
                  type='text'
                  name='descripcion'
                  id='descripcion'
                  value={service.descripcion}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
            </div>
            <div className='flex flex-col justify-center'>
               <label
                  htmlFor='duracion'
                  className='font-medium'
               >
                  Duracion
               </label>
               <input
                  type='number'
                  name='duracion'
                  id='duracion'
                  value={service.duracion}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
            </div>
            <div className='flex flex-col justify-center'>
               <label
                  htmlFor='precio'
                  className='font-medium'
               >
                  Precio
               </label>
               <input
                  type='number'
                  name='precio'
                  id='precio'
                  value={service.precio}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
            </div>
            <div className='flex flex-col justify-center'>
               <label
                  htmlFor='descuento'
                  className='font-medium'
               >
                  Descuento
               </label>
               <input
                  type='number'
                  name='descuento'
                  id='descuento'
                  value={service.descuento}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
            </div>
         </form>
         <div className='flex justify-evenly mt-5'>
            <button
               className='bg-emerald-600 text-emerald-100 px-6 rounded-md col-span-1'
               onClick={handleSubmit}
            >
               {data ? 'Editar Servicio' : 'Crear Servicio'}
            </button>
            <button
               onClick={showFormService}
               className='bg-rose-500 text-emerald-100 px-6 rounded-md disabled:bg-black/50 col-span-1'
            >
               Cancelar
            </button>
         </div>
      </>
   )
}

export default FormService
