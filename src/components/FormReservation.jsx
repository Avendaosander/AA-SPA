import { useContext, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { UserContext } from '../context/userContext'
import ErrorModal from './ErrorModal'

function FormReservation({ data, showFormReservation, peticion }) {
   const { user } = useContext(UserContext)
   const userID = decodeToken(user.token).id
   const [error, setError] = useState('')

   const [reservation, setReservation] = useState({
      service: data.service?._id || data._id,
      user: userID,
      nombre: data?.nombre || '',
      personas: data?.personas || 1,
      duracion: data?.duracion || data.duracion,
      fecha: data?.fecha || '',
      hora: data?.hora || '',
      precio: data?.precio || data.precio
   })

   function getMinimumDate() {
      const today = new Date();
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
   
      if (month < 10) month = `0${month}`
      
      if (day < 10) day = `0${day}`
   
      return `${year}-${month}-${day}`;
   }

   const handleChange = e => {
      if (e.target.name === 'hora') {
         const selectedTime = e.target.value.split(':');
         const hours = parseInt(selectedTime[0]);
         const minutes = parseInt(selectedTime[1]);
   
         if (
               (hours < 8) ||
               (hours === 8 && minutes < 0) ||
               (hours > 18) ||
               (hours === 18 && minutes > 0)
            ) {
            setError('Las horas permitidas son de 8 AM a 6 PM');
            return;
         }
      }
      setReservation({
         ...reservation,
         [e.target.name]: e.target.value
      })
   }

   const handlePeople = e => {
      const people = e.target.value
      const duracion = data.service?.duracion * people || data.duracion * people
      const precio = data.service?.precio * people || data.precio * people
      setReservation({
         ...reservation,
         personas: people,
         duracion: duracion,
         precio: precio
      })
   }

   const handleSubmit = async e => {
      e.preventDefault()
      if (reservation.nombre.trim() === '')
         return setError('El campo nombre no puede estar vacio')
      if (reservation.personas <= 0)
         return setError(
            'Los servicios estan disponibles solo para 1 persona minimo'
         )
      if (reservation.personas === 0 || reservation.personas > 5)
         return setError(
            'Los servicios estan disponibles solo para 5 personas maximo'
         )
      if (reservation.fecha === '')
         return setError('El campo fecha no puede estar vacio')
      if (reservation.hora === '')
         return setError('El campo hora no puede estar vacio')

      peticion(reservation, data._id)
      showFormReservation()
   }

   return (
      <>
         <form className='text-left text-lg ring-2 ring-emerald-600 p-5 rounded-xl flex flex-col sm:flex-row justify-center gap-10'>
            <fieldset className='flex flex-col gap-2'>
               <legend className='font-bold text-xl mb-5 text-center'>
                  Datos para la cita
               </legend>
               <label
                  htmlFor='nombre'
                  className='font-medium'
               >
                  Nombre
               </label>
               <input
                  type='text'
                  name='nombre'
                  id='nombre'
                  value={reservation.nombre}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
               <label
                  htmlFor='personas'
                  className='font-medium'
               >
                  Personas
               </label>
               <select
                  name='personas'
                  id='personas'
                  value={reservation.personas}
                  onChange={handlePeople}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
               </select>
               <label
                  htmlFor='fecha'
                  className='font-medium'
               >
                  Fecha
               </label>
               <input
                  type='date'
                  name='fecha'
                  id='fecha'
                  min={getMinimumDate()}
                  value={reservation.fecha}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
               <label
                  htmlFor='hora'
                  className='font-medium'
               >
                  Hora
               </label>
               <input
                  type='time'
                  min={'08:00'}
                  max={'06:00'}
                  name='hora'
                  id='hora'
                  value={reservation.hora}
                  onChange={handleChange}
                  className='bg-emerald-50 px-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-600'
               />
            </fieldset>
            <fieldset className='flex flex-col gap-2 max-sm:items-center'>
               <legend className='font-bold text-xl mb-5 text-center'>
                  Datos del servicio
               </legend>
               <p className='font-semibold'>Servicio</p>
               <p className=''>{data.service?.titulo || data.titulo}</p>
               <p className='font-semibold'>Duración</p>
               <p className=''>{reservation.duracion} min</p>
               <p className='font-semibold'>Precio</p>
               <p className=''>${reservation.precio}</p>
            </fieldset>
         </form>
         <div className='flex justify-evenly mt-5 max-sm:gap-5'>
            <button
               className='bg-emerald-600 text-emerald-100 px-4 rounded-md'
               onClick={handleSubmit}
            >
               {data.service?._id ? 'Editar Reservacion' : 'Crear Reservacion'}
            </button>
            <button
               onClick={showFormReservation}
               className='bg-rose-500 text-emerald-100 px-4 rounded-md disabled:bg-black/50'
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

export default FormReservation
