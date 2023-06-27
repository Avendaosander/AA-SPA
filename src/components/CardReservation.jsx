
function CardReservation({ data, handleModalEdit, handleModalDelete }) {
   return (
      <article className='flex flex-col gap-3 p-5 bg-emerald-300 ring-2 ring-emerald-600 rounded-xl max-w-[300px] w-full mx-auto text-lg'>
         <h3 className='font-bold text-center text-xl'>{data.service.titulo}</h3>
         <div className="flex items-center gap-2 font-medium">
            <p>Responsable:</p>
            <p className='text-sm'>{data.nombre}</p>
         </div>
         <div className="flex items-center gap-2 font-medium">
            <p>Fecha:</p>
            <p className='text-sm'>{data.fecha}</p>
         </div>
         <div className="flex items-center gap-2 font-medium">
            <p>Hora:</p>
            <p className='text-sm'>{data.hora}</p>
         </div>
         <div className="flex items-center gap-2 font-medium">
            <p>Duración:</p>
            <p className='text-sm'>{data.duracion} min</p>
         </div>
         <div className="flex items-center gap-2 font-medium">
            <p>Personas:</p>
            <p className='text-sm'>{data.personas}</p>
         </div>
         <div className="flex items-center gap-2 font-medium">
            <p>Precio:</p>
            <p className='text-sm'>${data.precio}</p>
         </div>
         <div className='flex justify-around'>
            <button
               onClick={() => handleModalEdit(data)}
               className='bg-emerald-600 text-emerald-100 px-6 rounded-md'
            >
               Modificar
            </button>
            <button
               onClick={() => handleModalDelete(data._id)}
               className='bg-rose-500 text-emerald-100 px-6 rounded-md'
            >
               Cancelar
            </button>
         </div>
      </article>
   )
}

export default CardReservation