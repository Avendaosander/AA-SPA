export const getServices = async (token, userID) => {
   const services = await fetch(`http://localhost:3000/services/home/${userID}`,{
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

   return services
}

export const postService = async (data, token, userID) => {
   const service = await fetch(`http://localhost:3000/services/create-Service/${userID}`,{
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

   return service
}

export const putService = async (data, token, id, userID) => {
   const service = await fetch(`http://localhost:3000/services/update-service/${id}/${userID}`,{
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

   return service
}

export const deleteService = async (token, id, userID) => {
   const user = await fetch(`http://localhost:3000/services/delete-service/${id}/${userID}`,{
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