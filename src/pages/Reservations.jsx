import { useState } from 'react'
import Header from '../components/Header'
import CardReservation from '../components/CardReservation'
import FormReservation from '../components/FormReservation'
import ModalEdit from '../components/ModalEdit'
import ModalDelete from '../components/ModalDelete'
import { useSpa } from '../hooks/useSpa'
import Loader from '../components/Loader'
import ErrorModal from '../components/ErrorModal'

function Reservations() {
   const { reservations, updateReservation, removeReservation, loading, error, setError } = useSpa()
   const [modalEdit, setModalEdit] = useState(false)
   const [modalDelete, setModalDelete] = useState(false)
   const [reserv, setReserv] = useState(null)
   const [deleteReserv, setDeleteReserv] = useState(null)

   const handleModalDelete = (data = null) => {
      if (data) setDeleteReserv(data)
      setModalDelete(!modalDelete)
   }
   
   const handleModalEdit = (data = null) => {
      if (data) setReserv(data)
      setModalEdit(!modalEdit)
   }

   const deleteReservations = async (id) => {
      removeReservation(id)
      handleModalDelete()
   }

   const updateReservations = async (data, id) => {
      updateReservation(data, id)
      handleModalEdit()
   }

   return (
      <>
         <Header texto={'Aqui podrás gestionar tus reservaciones'} />
         <main className='flex flex-col gap-5 py-5 mb-20 items-center'>
            <h2 className='font-bold text-2xl'>Reservaciones</h2>
            <section className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] container w-full gap-5'>
               {loading ? (
                  <Loader/>
               ) : reservations.length === 0 ? (
                  <h2 className='font-medium text-lg'>
                     No has realizado niguna reservacion
                  </h2>
               ) : (
                  reservations.map(reservation => (
                     <CardReservation
                        key={reservation._id}
                        data={reservation}
                        handleModalEdit={handleModalEdit}
                        handleModalDelete={handleModalDelete}
                     />
                  ))
               )}
            </section>
            {modalEdit && 
               <ModalEdit>
                  <FormReservation data={reserv} showFormReservation={handleModalEdit} peticion={updateReservations}/>
               </ModalEdit>
            }
            {modalDelete && 
               <ModalDelete handleModalDelete={handleModalDelete} id={deleteReserv} peticion={deleteReservations}/>
            }
            {!!error && 
               <ErrorModal error={error} setError={setError}/>
            }
         </main>
      </>
   )
}

export default Reservations
