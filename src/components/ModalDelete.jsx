function ModalDelete({ handleModalDelete, peticion, id }) {
   const handleConfirm = (id) => {
      peticion(id)
      handleModalDelete()
   }
   return (
      <section className='fixed z-10 bottom-0 right-0 left-0 top-0 bg-black/50 flex justify-center items-center'>
         <article className='flex flex-col gap-5 p-5 bg-emerald-300 shadow-2xl shadow-emerald-800 rounded-xl mx-auto text-lg'>
            <h2 className='font-bold text-xl'>
               Estas seguro que quieres eliminarlo?
            </h2>
            <div className="flex justify-around">
               <button
                  onClick={() => handleConfirm(id)}
                  className='bg-emerald-600 text-emerald-100 m-auto px-6 rounded-md col-span-1'
               >
                  Si
               </button>
               <button
                  onClick={handleModalDelete}
                  className='bg-rose-500 text-emerald-100 m-auto px-6 rounded-md disabled:bg-black/50 col-span-1'
               >
                  Cancelar
               </button>
            </div>
         </article>
      </section>
   )
}

export default ModalDelete
