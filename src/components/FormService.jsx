import { useState } from 'react'

function FormService({  data, showFormService, peticion }) {
   const [service, setService] = useState({
      titulo: data?.titulo || '',
      descripcion: data?.descripcion || '',
      duracion: data?.duracion || 5,
      precio: data?.precio || 1,
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
         <form className='text-left text-lg ring-2 ring-emerald-600 p-5 rounded-xl flex flex-col sm:flex-row justify-center sm:gap-10'>
            <div className='flex flex-col gap-2'>
               <div className='flex flex-col justify-center gap-2'>
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
               <div className='flex flex-col justify-center gap-2'>
                  <label
                     htmlFor='descripcion'
                     className='font-medium'
                  >
                     Descripcion
                  </label>
                  <textarea
                     type='text'
                     name='descripcion'
                     id='descripcion'
                     value={service.descripcion}
                     onChange={handleChange}
                     className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600 resize-none h-[100px]'
                  ></textarea>
               </div>
            </div>
            <div className='flex flex-col gap-2'>
               <div className='flex flex-col justify-center gap-2'>
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
                     min={5}
                     max={120}
                     value={service.duracion}
                     onChange={handleChange}
                     className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
                  />
               </div>
               <div className='flex flex-col justify-center gap-2'>
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
                     min={1}
                     value={service.precio}
                     onChange={handleChange}
                     className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
                  />
               </div>
               <div className='flex flex-col justify-center gap-2'>
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
                     min={0}
                     max={100}
                     value={service.descuento}
                     onChange={handleChange}
                     className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
                  />
               </div>
            </div>
         </form>
         <div className='flex justify-evenly mt-5 max-sm:gap-5'>
            <button
               className='bg-emerald-600 text-emerald-100 px-6 rounded-md'
               onClick={handleSubmit}
            >
               {data ? 'Editar Servicio' : 'Crear Servicio'}
            </button>
            <button
               onClick={showFormService}
               className='bg-rose-500 text-emerald-100 px-6 rounded-md disabled:bg-black/50'
            >
               Cancelar
            </button>
         </div>
      </>
   )
}

export default FormService
