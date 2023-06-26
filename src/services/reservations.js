export const getReservations = async (token, userID) => {
   const reservations = await fetch(`http://localhost:3000/services/reservations/${userID}`,{
      headers: { Authorization: `Bearer ${token}` }
   })
      .then(response => response.json())
      .then(res => {
         if (res.messageError) throw new Error(res.messageError)
         return res
      })
      .catch(e => {
         return ({messageError: e.message})
      })

   return reservations
}

export const postReservation = async (data, token) => {
   const reservation = await fetch('http://localhost:3000/services/create-reservation',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
   })
      .then(response => response.json())
      .then(res => {
         if (res.messageError) throw new Error(res.messageError)
         return res
      })
      .catch(e => {
         return ({messageError: e.message})
      })

   return reservation
}

export const putReservation = async (data, token, id) => {
   const reservation = await fetch(`http://localhost:3000/services/update-reservation/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
   })
      .then(response => response.json())
      .then(res => {
         if (res.messageError) throw new Error(res.messageError)
         return res
      })
      .catch(e => {
         return ({messageError: e.message})
      })

   return reservation
}

export const deleteReservation = async (token, id) => {
   const user = await fetch(`http://localhost:3000/services/delete-reservation/${id}`,{
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
   })
      .then(response => response.json())
      .then(res => {
         if (res.messageError) throw new Error(res.messageError)
         return res
      })
      .catch(e => {
         return ({messageError: e.message})
      })

   return user
}