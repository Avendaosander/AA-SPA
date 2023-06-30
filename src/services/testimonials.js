export const postTestimony = async (data, token) => {
   const testimony = await fetch('http://localhost:3000/services/create-testimony',{
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

   return testimony
}

export const deleteTestimony = async (token, id) => {
   const testimony = await fetch(`http://localhost:3000/services/delete-testimony/${id}`,{
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
   })
      .then(response => response.json())
      .then(res => {
         if (res.messageError) throw new Error(res.messageError)
         return res
      })
      .catch(e => {
         return ({messageError: e.message})
      })

   return testimony
}