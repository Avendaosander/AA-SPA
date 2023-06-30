export const getService = async (token, id) => {
   const service = await fetch(`http://localhost:3000/services/get-service/${id}`,{
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

   return service
}